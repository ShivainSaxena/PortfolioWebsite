// submitForm.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  // Retrieve email and password from environment variables


  // Set up nodemailer to send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "shivainsaxena@gmail.com",
      pass: "mnkw dlay wtpq yjma",
    },
  });

  const mailOptions = {
    from: email,
    to: "shivainsaxena@gmail.com",
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