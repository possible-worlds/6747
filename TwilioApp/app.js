const express = require('express');
const { VoiceResponse } = require('twilio').twiml;

const app = express();
app.use(express.urlencoded({ extended: false }));

// Array of MP3 file URLs
const mp3Files = [
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1-01.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1-02.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p1-03.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p2.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p3.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p4.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p5.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p6.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p7.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p8.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p9.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p10.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p11.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p12.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p13.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p14.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p15.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p16.mp3',
    'https://p-w.ams3.digitaloceanspaces.com/twilio/palestine-voice/comp/p17.mp3',
    // Add more MP3 files as needed
];

// Endpoint to receive incoming calls
app.post('/incoming', (req, res) => {
    const twiml = new VoiceResponse();

    // Play each MP3 file in order
    mp3Files.forEach(fileUrl => {
        twiml.play({}, fileUrl);
    });

    res.type('text/xml');
    res.send(twiml.toString());
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

