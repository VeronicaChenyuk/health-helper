const express = require('express');
const nodemailer = require('nodemailer');
const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { methodic } = req.body;
  const newMethodic = await new Methodic(methodic);
  // console.log(methodic)
  const { patientEmail, doctorEmail, drugs, patientName,
    theraphies, analisis, comment,
    patientReports, nextVisit, doctorName, specialist } = methodic;

  const stringDrugs = drugs.map(({ nameOfDrug, dosage, frequency, beforeAfterEat, duration }) => `\n${nameOfDrug} дозирока ${dosage} мг, принимать ${frequency} раз(а) в день ${beforeAfterEat}, длительность курса ${duration} суток;`).join('');
  const stringTheraphies = theraphies.map(({ nameOfTheraphy, frequency, duration }) => `\n${nameOfTheraphy}, проводить ${frequency} раз(а) в неделю, количество сеансов ${duration};`).join('');
  console.log(stringDrugs, stringTheraphies);
  const syringAnalisis = analisis.join(`,\n`)

  // const methodic = {
  //   patientName: values.patientName,
  //   patientEmail: values.email,
  //   doctorEmail: email,
  //   drugs,
  //   theraphies,
  //   analisis: nameOfAnalysis,
  //   comment: values.comments,
  //   patientReports,
  //   nextVisit: values.nextVisit,
  //   dateOfTheLastVisit: date,
  //   sourceData: values,
  //   doctorName,
  //   specialist,
  //   tasks,
  // };

  await newMethodic.save();
  async function main() {
    // Generate test SMTP service account from ethereal.emailldlsof
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'patientlisa@mail.ru', // generated ethereal user
        pass: 'Lisa010203', // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Medical Assistant " <patientlisa@mail.ru>', // sender address
      to: patientEmail, // list of receivers
      subject: 'Вы записаны! ', // Subject line
      text: 'Информация о записе', // plain text body
      html: `<b>Здравствуйте ${patientName}! Вы были на приёме у врача по специальности -  ${specialist} : <strong>${doctorName}</strong></b>
                                <p><strong>Методика лечения:</strong></p>
                                <hr>
                                <p>Вам назначали лекарства:</p>
                                <p>${stringDrugs}</p>
                                <p>Вам назначали терапию:</p>
                                <hr/>
                                <p>${stringTheraphies}</p>
                                <p>Вам назначали анализы:</p>
                                <p>${syringAnalisis}</p>
                                <p>${comment}</p>
                                <p>${patientReports}</p>
                                <p>Следующий визит <strong>${nextVisit}</strong></p>
                                <p>Более подробная информация в приложении <strong>MEDICAL TODO</strong>. Перейдите по ссылке  ${'http://localhost:3000/'}</p>
                                
                                <p>Вы всегда можете связаться со своим лечащим врачом по адресу ${doctorEmail}</p>`, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.send('Письмо отправлено!');
  }
  main().catch(console.error);
  res.redirect('/');
});


module.exports = router;
