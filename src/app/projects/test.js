const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")
const msg = {
  to: 'darioanwar1@gmail.com', // Change to your recipient
  from: 'darioanwar3@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })