require('dotenv').config();
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function mailer({ to, subject, text, html }) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_EMAIL, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Blood Connect 🩸", <ipulkit02030@gmail.com>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = mailer;
