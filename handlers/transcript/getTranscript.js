const { getFileObjectFromS3, streamToString } = require("../../data/getTranscript");

exports.handler = async (bucketName, objectKey) => {
    try {
        const objectData = await getFileObjectFromS3(bucketName, objectKey);
        return await streamToString(objectData.Body);
    } catch (error) {
        console.error(error);
    }
};
