import { Request,Response } from 'express';
import S3 from 'aws-sdk/clients/s3';
import * as fs from "fs";

const BUCKET_NAME:string = "nodejsfileuploadtoaws";
const region:string|undefined=process.env.AWS_REGION;
const accesskey:string|undefined=process.env.AWS_ACCESS_KEY;
const secret_key:string|undefined=process.env.AWS_SECRET_ACCESS_KEY;

type bucketType = {
    region:string|undefined,
    accessKeyId:string|undefined,
    secretAccessKey:string|undefined
}
type bucketUploadDataType = {
    Bucket:string,
    Body:fs.ReadStream,
    Key:string
}

const s3Object:bucketType = {
    region:region,
    accessKeyId:accesskey,
    secretAccessKey:secret_key
}
const s3 = new S3(s3Object);

exports.HomePageRequest = (req:Request,res:Response)=>{
    res.status(200).json({message:"Hello From Home Page"});
}
//File Upload - Post Request
exports.FileUpload = (file:Express.Multer.File)=>{
    const fileStream:fs.ReadStream = fs.createReadStream(file.path);

    const uploadData:bucketUploadDataType = {
        Bucket:BUCKET_NAME,
        Body:fileStream,
        Key:file.filename
    } 

    return s3.upload(uploadData).promise();
}