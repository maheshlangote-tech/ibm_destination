const COS = require('ibm-cos-sdk');
const config = require('./config');

const cos = new COS.S3({
  endpoint: config.endpoint,
  apiKeyId: config.apiKeyId,
  ibmAuthEndpoint: config.ibmAuthEndpoint,
  serviceInstanceId: config.serviceInstanceId,
  signatureVersion: 'iam',
  httpOptions: {
    timeout: 30000,
  },
});

module.exports = cos;