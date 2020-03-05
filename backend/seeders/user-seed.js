// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://whenyseemekillme:Fghj8168@cluster0-e2rce.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('../models/user');


const user = [
  {
    email: 'fox@fox.fox',
    password: 'fox',
  }
];

User.insertMany(user).then(() => {
  mongoose.connection.close();
});
