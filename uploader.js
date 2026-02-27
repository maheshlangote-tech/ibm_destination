const fs = require('fs');
const path = require('path');
const cos = require('./cosClient');
const config = require('./config');

async function uploadFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File does not exist: ${filePath}`);
  }

  const fileName = path.basename(filePath);
  const key = `upload/${fileName}`;

  const fileStream = fs.createReadStream(filePath);

  const params = {
    Bucket: config.bucketName,
    Key: key,
    Body: fileStream,
  };

  try {
    const result = await cos.upload(params).promise();

    console.log(JSON.stringify({
      level: "info",
      message: "File uploaded successfully",
      bucket: config.bucketName,
      key: key,
      location: result.Location
    }));

    return result;
  } catch (error) {
    console.error(JSON.stringify({
      level: "error",
      message: "Upload failed",
      error: error.message
    }));

    throw error;
  }
}

module.exports = uploadFile;