const express = require('express');
const nodemailer = require('nodemailer');

const Methodic = require('../models/methodic');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const { methodic } = req.body;
  const newMethodic = await new Methodic(methodic);
  await newMethodic.save();

  // nodemailer
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'nii.gena@bk.ru', // generated ethereal user
        pass: 'Nii123456', // generated ethereal password
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Medical Assistant 🧬" <nii.gena@bk.ru>', // sender address
      to: 'bbyugh@mail.ru', // list of receivers
      subject: 'Вы записаны! ', // Subject line
      text: 'Информация о записе', // plain text body
      html: `<b>Здравствуйте! Вы были на приёме у врача <strong>ФИО врача</strong></b>
                                <p>Методика лечения: с <strong>проверочный</strong> до <strong>текст</strong> на прибор <i>вставка тайтл.</i></p>
                                <p>Более подробная информация <strong>ссылка на приложение</strong> </p>
                                <p>Вы всегда можете связаться со своим лечащим врачом через приложение</p>`, // html body
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

router.post('/update', async (req, res, next) => {
  const { methodic } = req.body;
  const { _id } = methodic;
  console.log(_id);

  await Methodic.findOneAndUpdate({ _id }, methodic);
  res.send({ answer: true });
});


module.exports = router;
