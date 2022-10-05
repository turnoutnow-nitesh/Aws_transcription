const { S3Client, GetObjectCommand} = require('@aws-sdk/client-s3');
const fs = require("fs");

exports.writeJSON = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data));

const getFileObjectFromS3 = async (bucket, key) => {
    const params = {
        Bucket: bucket,
        Key: key
    };

    const getObjectCommand = new GetObjectCommand(params);
    const s3Client = new S3Client();
    try {
        const s3Response = await s3Client.send(getObjectCommand);
        return s3Response;
    } catch (error) {
        console.log(`Error while fetching Operation JSON from S3 for ${key}`, error);
    }
};

const streamToString = (stream) =>
    new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });

exports.getFileObjectFromS3 = getFileObjectFromS3;
exports.streamToString = streamToString;
