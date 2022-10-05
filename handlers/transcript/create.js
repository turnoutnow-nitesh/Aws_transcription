const { TranscribeClient, StartTranscriptionJobCommand} = require("@aws-sdk/client-transcribe"); // CommonJS import

exports.handler = async () => {
    const region = "us-east-1";
    const params = {
        TranscriptionJobName: "transcript",
        LanguageCode: "en-US",
        Media: {
            MediaFileUri: "s3://turnoutnow-onboarding/Nitesh/input/01GEH78TKFXZKRMPHRB60PR8EP.mp3"
        },
        OutputBucketName: "turnoutnow-onboarding",
        OutputKey:"Nitesh/output/transcript.json",
    };
    const transcribeConfig = {
        region,
    };
    const transcribeClient = new TranscribeClient(transcribeConfig);
    const transcribeCommand = new StartTranscriptionJobCommand(params);
    try {
        const transcribeResponse = await transcribeClient.send(transcribeCommand);
        return transcribeResponse.TranscriptionJob;
    } catch (err) {
        console.log(err);
    }
}

