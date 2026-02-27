require('dotenv').config();

function validateEnv() {
  const requiredVars = [
    'COS_ENDPOINT',
    'COS_API_KEY',
    'COS_AUTH_ENDPOINT',
    'COS_SERVICE_INSTANCE_ID',
    'COS_BUCKET'
  ];

  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
}

validateEnv();

module.exports = {
  endpoint: process.env.COS_ENDPOINT,
  apiKeyId: process.env.COS_API_KEY,
  ibmAuthEndpoint: process.env.COS_AUTH_ENDPOINT,
  serviceInstanceId: process.env.COS_SERVICE_INSTANCE_ID,
  bucketName: process.env.COS_BUCKET,
};