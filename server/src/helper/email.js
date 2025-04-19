const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const emailWithNodemail = async (emailData) => {
  try {
    const { to, subject, html } = emailData;
    const mailOptions = {
      from: smtpUsername,
      to: to,
      subject: subject,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    throw new Error("Email sending failed: " + error.message);
  }
};
module.exports = emailWithNodemail;
