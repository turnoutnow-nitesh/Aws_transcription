const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

exports.uploadS3Object = async (bucket, objectKey, fileContent, ContentType) => {
    const input = {
        Bucket: bucket,
        Key: objectKey,
        Body: fileContent,
        ContentType: ContentType
    };

    const s3Client = new S3Client();
    try {
        const s3Response = await s3Client.send(new PutObjectCommand(input));
        return s3Response;
    } catch (error) {
        console.log(`Error while uploading file to S3 for ${objectKey}`, error);
    }
};


