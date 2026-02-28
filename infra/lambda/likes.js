const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  ScanCommand,
  UpdateCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;
  const path = event.rawPath || event.path;

  try {
    // GET /api/likes — return all like counts
    if (method === "GET" && path === "/api/likes") {
      const result = await ddb.send(
        new ScanCommand({ TableName: TABLE_NAME })
      );
      const likes = {};
      for (const item of result.Items || []) {
        likes[item.songId] = item.likes || 0;
      }
      return respond(200, { likes });
    }

    // POST /api/likes/{songId} — increment like counter
    if (method === "POST" && path.startsWith("/api/likes/")) {
      const songId = decodeURIComponent(path.replace("/api/likes/", ""));
      if (!songId) return respond(400, { error: "Missing songId" });

      const result = await ddb.send(
        new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { songId },
          UpdateExpression: "ADD likes :inc",
          ExpressionAttributeValues: { ":inc": 1 },
          ReturnValues: "ALL_NEW",
        })
      );
      return respond(200, {
        songId,
        likes: result.Attributes.likes,
      });
    }

    return respond(404, { error: "Not found" });
  } catch (err) {
    console.error("Lambda error:", err);
    return respond(500, { error: "Internal server error" });
  }
};

function respond(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
