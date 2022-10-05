const { handler } = require("../../handlers/transcript/getStatus");

// Get the Transcription Status
(async () => {
    const response = await handler();
    console.log("Transcription job status is", response.TranscriptionJobStatus);
})();