const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(bodyParser.json());

let lastEmailSentTime = 0;
const minTimeDifference = 60000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.post('/send-email', async (req, res) => {

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
    from: 'test',
    to,
    subject,
    html: removeQuotes(body),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    lastEmailSentTime = currentTime;
    res.status(200).json({ 
      message: 'E-mail envoyé avec succès',
      success: true,
      toMuchRequest: false
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
  }
});

function removeQuotes(inputString) {
  return inputString.replace(/"/g, '');
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
