# IBM Cloud Object Storage (COS) File Uploader

Production-ready Node.js utility to upload files to IBM Cloud Object Storage (COS) using `ibm-cos-sdk`.

---

##  Overview

This project provides a secure and production-ready implementation to upload files to IBM Cloud Object Storage using:

- Environment-based configuration
- Streaming upload (supports large files)
- Structured JSON logging
- Input validation
- Modular architecture

---

## Prerequisites

- Node.js >= 18
- IBM Cloud Object Storage instance
- Service credentials:
  - API Key
  - Service Instance ID (CRN)
  - Bucket name

Check your Node version:

```bash
node -v
```

---

## Installation

Clone the repository or download the project, then run:

```bash
npm install
```

---

## Environment Configuration

Create a `.env` file in the project root directory:

```env
COS_ENDPOINT=https://s3.us-south.cloud-object-storage.appdomain.cloud
COS_API_KEY=your_api_key_here
COS_AUTH_ENDPOINT=https://iam.cloud.ibm.com/identity/token
COS_SERVICE_INSTANCE_ID=your_service_instance_id_here
COS_BUCKET=your_bucket_name
```

---

## Required Environment Variables

| Variable | Description |
|----------|------------|
| COS_ENDPOINT | IBM COS S3 regional endpoint |
| COS_API_KEY | IBM Cloud API key |
| COS_AUTH_ENDPOINT | IBM IAM authentication endpoint |
| COS_SERVICE_INSTANCE_ID | COS service instance CRN |
| COS_BUCKET | Target bucket name |

 **Important:**  
- Never commit your `.env` file.
- Keep your API keys secure.

---

## How to Run

Upload a file by passing the file path as an argument:

```bash
node index.js <file-path>
```

### Example:

```bash
node index.js sample.log.gz
```

---

## Upload Path Structure

Files are uploaded to:

```
upload/<filename>
```

Example:

```
upload/sample.log.gz
```

---

##  Project Structure

```
project/
│── config.js
│── cosClient.js
│── uploader.js
│── index.js
│── package.json
│── README.md
│── .env
```

---

