const uploadFile = require('./uploader');

async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    console.error("Usage: node index.js <file-path>");
    process.exit(1);
  }

  try {
    await uploadFile(filePath);
  } catch (err) {
    process.exit(1);
  }
}

main();