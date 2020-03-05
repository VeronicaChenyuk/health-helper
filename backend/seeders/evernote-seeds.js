// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vyuzh:VyuzhDatabase2020@cluster0-lawna.mongodb.net/skeleton-redux', { useNewUrlParser: true, useUnifiedTopology: true });

const Topic = require('../models/topic');


const topic = [
  {
    title: 'HTML',
    questions: [
      {
        question: 'Для чего нужен тег <noscript>?',
        answer1: 'Чтобы отображать некоторую информацию пользователю, если у него в браузере не включен/не поддерживается JavaScript.',
        answer2: 'Чтобы отображать ошибки/предупреждения неправильно сработавшего Javascript на странице.',
        answer3: 'Чтобы отключить скрипты в браузере.',
        answer4: 'Чтобы отключить скрипты в браузере.',
        points: 200,
      },
      {
        question: 'Укажите правильный вариант создания гипертекстовой ссылки в html.',
        answer1: '<a url="http://www.proghub.ru">proghub</a>',
        answer2: '<a href="http://www.proghub.ru">proghub</a>',
        answer3: '<a link="http://www.proghub.ru">proghub</a>',
        answer4: '<a href="http://www.proghub.ru">proghub</a>',
        points: 400,
      },
      {
        question: 'Что делает атрибут align со значением justify для элемента div?',
        answer1: 'выравнивает текст по центру',
        answer2: 'выравнивает текст по ширине',
        answer3: 'выравнивает текст по высоте',
        answer4: 'выравнивает текст по ширине',
        points: 600,
      },
      {
        question: 'Выберите html-код, создающий checkbox.',
        answer1: '<checkbox/>',
        answer2: '<input type="check"/>',
        answer3: '<input type="checkbox"/>',
        answer4: '<input type="checkbox"/>',
        points: 800,
      },
      {
        question: 'Какое значение атрибута type используется при создании кнопки очистки данных формы?',
        answer1: 'type="clear"',
        answer2: 'type="reset"',
        answer3: 'type="clearbutton"',
        answer4: 'type="reset"',
        points: 1000,
      },
    ]
  }

];

Topic.insertMany(topic).then(() => {
  mongoose.connection.close();
});
