// accessKeyId:        process.env.AWS_ACCESS_KEY_ID,
// secretAccessKey:    process.env.AWS_SECRET_ACCESS_KEY,

import { S3Client } from "@aws-sdk/client-s3";
const REGION = process.env.AWS_REGION; //e.g. "us-east-1"
const s3Client = new S3Client({ 
  region: REGION 
});
export { s3Client };