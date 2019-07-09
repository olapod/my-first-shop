'use-strict';
const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = require('./config');
const cors = require('cors')({origin: true});
admin.initializeApp();

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

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
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

      let mailOptions = {
        from: '"Nodemailer Contact" <alecs@op.pl>', // sender address
        to: 'alecs@op.pl', // list of receivers
        subject: 'Prośba o kontakt', // Subject line
        html: output // html body
      };

      // returning result
      return transporter.sendMail(mailOptions, (erro, info) => {
          if(erro){
              return res.send(erro.toString());
          }
          return res.send('Sended');
      });
  });
});
