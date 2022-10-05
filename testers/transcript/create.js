const { handler } = require("../../handlers/transcript/create");

(async () => {
    const response = await handler();
    console.log("Transcription job created, the details:");
    console.log(response);
})();