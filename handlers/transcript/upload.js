const ULID = require("ulid");
const fs = require("fs");
const { uploadS3Object } = require("../../data/upload");

const bucketName = "turnoutnow-onboarding";

exports.handler = async () => {
    try {
        const fileName = ULID.ulid();
        const content = fs.readFileSync("../../file/Choose_the_right_database_for_modern_applications.mp3");
        const objectKey = `Nitesh/input/${fileName}.mp3`;
        const ContentType = "audio/mp3";
        const response = await uploadS3Object(bucketName, objectKey, content, ContentType);
        return response;
    } catch (error) {
        console.error(error);
    }
};
