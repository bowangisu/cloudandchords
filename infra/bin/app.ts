#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticSiteStack } from '../lib/static-site-stack';

const app = new cdk.App();

const domainName = app.node.tryGetContext('domainName') || 'cloudandchords.ai';
const hostedZoneId = app.node.tryGetContext('hostedZoneId');

if (!hostedZoneId) {
  console.warn(
    'WARNING: hostedZoneId not provided. Pass it via --context hostedZoneId=YOUR_ZONE_ID'
  );
}

new StaticSiteStack(app, 'CloudAndChordsSite', {
  domainName,
  hostedZoneId,
  env: {
    // ACM certificates for CloudFront must be in us-east-1
    region: 'us-east-1',
  },
});

app.synth();
