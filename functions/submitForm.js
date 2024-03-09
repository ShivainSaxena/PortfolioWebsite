// submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Retrieve email and password from environment variables
  const userEmail = process.env.USER_EMAIL;
  const userPassword = process.env.USER_PASSWORD;

  // Set up nodemailer to send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: userEmail,
      pass: userPassword,
    },
  });

  const mailOptions = {
    from: email,
    to: userEmail,
    subject: 'New Portfolio Contact Form Submission',
    text: `From: ${name},\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error sending email',
    };
  }
};