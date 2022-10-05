const { TranscribeClient, GetTranscriptionJobCommand} = require("@aws-sdk/client-transcribe"); // CommonJS import

exports.handler = async () => {
    const region = "us-east-1";
    const params = {
        TranscriptionJobName: "transcript",
    };
    const transcribeConfig = {
        region,
    };
    const transcribeClient = new TranscribeClient(transcribeConfig);
    const transcribeCommand = new GetTranscriptionJobCommand(params);
    try {
        const transcribeResponse = await transcribeClient.send(transcribeCommand);
        // console.log(transcribeResponse.TranscriptionJob);
        return transcribeResponse.TranscriptionJob;
    } catch (err) {
        console.log(err);
    }
}
