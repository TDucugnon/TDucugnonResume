const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use(bodyParser.json());

let lastEmailSentTime = 0;
const minTimeDifference = 60000;
app.post('/send-mail', async (req, res) => {
    const currentTime = new Date().getTime();

    if (currentTime - lastEmailSentTime < minTimeDifference) {
        return res.status(429).json({
            toMuchRequest: true,
        });
    }

    const body  = req.body.emailBody;
    const to = process.env.GMAIL_USER;
    const subject = 'EMAIL SITE';
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: '',
        to,
        subject,
        html: removeQuotes(body),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        lastEmailSentTime = currentTime;
        res.status(200).json({ 
            message: 'Success',
            success: true,
            toMuchRequest: false
        });
    } catch (error) {
        res.status(500).json({ message: 'Error during the sending of the mail' });
    }
});

function removeQuotes(inputString) {
    return inputString.replace(/"/g, '');
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

module.exports = app;