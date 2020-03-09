const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);


mongoose.connect('mongodb+srv://vyuzh:VyuzhDatabase2020@cluster0-lawna.mongodb.net/medical-todo', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const loadDoctorRouter = require('./routes/loadDoctor');
const saveMethodicRouter = require('./routes/saveMethodic');
const loadMethodicRouter = require('./routes/loadMethodic');
const uploadRouter = require('./routes/upload');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRouter);
app.use('/personal', loadDoctorRouter);
app.use('/savemethodic', saveMethodicRouter);
app.use('/loadmethodic', loadMethodicRouter);


// app.use((req, res, next) => {
//   const { user } = req.session;
//   if (user) {
//     app.locals.username = user;
//     return next();
//   }
//   return res.redirect('/');
// });
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
