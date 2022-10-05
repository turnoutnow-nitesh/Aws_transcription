const { handler } = require("../../handlers/transcript/getTranscript");
const { writeJSON } = require("../../data/getTranscript");

(async () => {
    // Download Trasncript data from S3 bucket
    const bucketName = "turnoutnow-onboarding";
    const fileContent = await handler(bucketName, "Nitesh/output/transcript.json");
    console.log(fileContent);
    writeJSON("../../responses/transcript.json", JSON.parse(fileContent));
})();