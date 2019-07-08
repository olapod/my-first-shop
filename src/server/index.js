const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 8080;
const config = require('./config');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/form', (req, res) => {
  let output = `
    <h3>Dane kontaktowe</h3>
        <ul>
          <li>Imię i nazwisko: ${ req.body.name }</li>
          <li>Telefon: ${ req.body.phone }</li>
          <li>Email: ${ req.body.email }</li>
        </ul>
        <h3>Wiadomość</h3>
        <p>${ req.body.message }</p>
    `;

    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    pool: true,
    host: config.HOST,
    port: 465,
    secure: true,
    auth: {
      user: config.USER,
      pass: config.PASS
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Nodemailer Contact" <alecs@op.pl>', // sender address
    to: 'alecs@op.pl', // list of receivers
    subject: 'Prośba o kontakt', // Subject line
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    else {
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    };
  });
});

// server.listen(port, () => console.log(`App running on port ${port}`));
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});