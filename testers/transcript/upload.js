const { handler } = require("../../handlers/transcript/upload");

(async () => {
    // Upload a new file onto S3 bucket
    await handler();
})();