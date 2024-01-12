"use server";


import { S3 } from 'aws-sdk';
import axios from 'axios';
import { Readable } from 'stream';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

async function downloadImage(url: string): Promise<Buffer> {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return Buffer.from(response.data, 'binary');
}

async function uploadToS3(buffer: Buffer, bucket: string, key: string): Promise<string> {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);

   await s3.upload({
    Bucket: bucket,
    Key: key,
    Body: stream,
    ACL: 'public-read',
  }).send();

  return `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}

export async function downloadAndUploadImage(url: string, key: string): Promise<string> {
  const buffer = await downloadImage(url);
  return await uploadToS3(buffer, process.env.AWS_BUCKET_NAME!, key);
}


