import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as apigwv2integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import { Construct } from 'constructs';

interface StaticSiteStackProps extends cdk.StackProps {
  domainName: string;
  hostedZoneId?: string;
}

export class StaticSiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: StaticSiteStackProps) {
    super(scope, id, props);

    const { domainName, hostedZoneId } = props;

    // S3 bucket for static site content (private, accessed via CloudFront OAC)
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: `${domainName}-site`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // Look up existing hosted zone (if hostedZoneId provided)
    const hostedZone = hostedZoneId
      ? route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
          hostedZoneId,
          zoneName: domainName,
        })
      : undefined;

    // ACM certificate for HTTPS
    const certificate = new acm.Certificate(this, 'SiteCertificate', {
      domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: hostedZone
        ? acm.CertificateValidation.fromDns(hostedZone)
        : acm.CertificateValidation.fromDns(),
    });

    // --- Likes API backend ---

    // DynamoDB table for song likes
    const likesTable = new dynamodb.Table(this, 'LikesTable', {
      partitionKey: { name: 'songId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      tableName: `${domainName}-likes`,
    });

    // Lambda function for likes API
    const likesFunction = new lambda.Function(this, 'LikesFunction', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'likes.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        TABLE_NAME: likesTable.tableName,
      },
      timeout: cdk.Duration.seconds(10),
      memorySize: 128,
    });

    likesTable.grantReadWriteData(likesFunction);

    // HTTP API Gateway
    const httpApi = new apigwv2.HttpApi(this, 'LikesApi', {
      apiName: `${domainName}-likes-api`,
    });

    const lambdaIntegration = new apigwv2integrations.HttpLambdaIntegration(
      'LikesIntegration',
      likesFunction,
    );

    httpApi.addRoutes({
      path: '/api/likes',
      methods: [apigwv2.HttpMethod.GET],
      integration: lambdaIntegration,
    });

    httpApi.addRoutes({
      path: '/api/likes/{songId}',
      methods: [apigwv2.HttpMethod.POST],
      integration: lambdaIntegration,
    });

    httpApi.addRoutes({
      path: '/api/plays/{songId}',
      methods: [apigwv2.HttpMethod.POST],
      integration: lambdaIntegration,
    });

    // API Gateway origin for CloudFront
    const apiOrigin = new origins.HttpOrigin(
      cdk.Fn.select(2, cdk.Fn.split('/', httpApi.apiEndpoint)),
      { protocolPolicy: cloudfront.OriginProtocolPolicy.HTTPS_ONLY },
    );

    // Security response headers policy
    const securityHeadersPolicy = new cloudfront.ResponseHeadersPolicy(this, 'SecurityHeadersPolicy', {
      securityHeadersBehavior: {
        strictTransportSecurity: {
          accessControlMaxAge: cdk.Duration.days(365),
          includeSubdomains: true,
          preload: true,
          override: true,
        },
        contentTypeOptions: { override: true },
        frameOptions: {
          frameOption: cloudfront.HeadersFrameOption.DENY,
          override: true,
        },
        referrerPolicy: {
          referrerPolicy: cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
          override: true,
        },
        contentSecurityPolicy: {
          contentSecurityPolicy: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' https://images.unsplash.com data:",
            "media-src 'self'",
            "connect-src 'self'",
            "frame-ancestors 'none'",
          ].join('; '),
          override: true,
        },
      },
      customHeadersBehavior: {
        customHeaders: [
          {
            header: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
            override: true,
          },
        ],
      },
    });

    // CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        responseHeadersPolicy: securityHeadersPolicy,
      },
      additionalBehaviors: {
        'api/*': {
          origin: apiOrigin,
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
          originRequestPolicy: cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        },
      },
      domainNames: [domainName, `www.${domainName}`],
      certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
    });

    // Route 53 DNS records
    if (hostedZone) {
      // Apex domain
      new route53.ARecord(this, 'SiteARecord', {
        zone: hostedZone,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });

      new route53.AaaaRecord(this, 'SiteAaaaRecord', {
        zone: hostedZone,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });

      // www subdomain
      new route53.ARecord(this, 'WwwARecord', {
        zone: hostedZone,
        recordName: `www.${domainName}`,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });

      new route53.AaaaRecord(this, 'WwwAaaaRecord', {
        zone: hostedZone,
        recordName: `www.${domainName}`,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(distribution)
        ),
      });
    }

    // Outputs for GitHub Actions secrets
    new cdk.CfnOutput(this, 'BucketName', {
      value: siteBucket.bucketName,
      description: 'S3 bucket name for GitHub Actions S3_BUCKET_NAME secret',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description:
        'CloudFront distribution ID for GitHub Actions CLOUDFRONT_DISTRIBUTION_ID secret',
    });

    new cdk.CfnOutput(this, 'DistributionDomain', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution domain name',
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: httpApi.apiEndpoint,
      description: 'API Gateway endpoint for likes API',
    });
  }
}
