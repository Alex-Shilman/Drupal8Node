var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./nodeServer/routes/index');
var users = require('./nodeServer/routes/users');

var app = express();
/*cors*/
var cors = require('cors');
const corsOptions = {
  origin: 'http://dev.ashilm01:8088',
  credentials: true
}


// enables trust for x-forwared-for  
app.enable('trust proxy');
// view engine setup
app.set('views', path.join(__dirname, 'nodeServer/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'some_secret',
  path: '/',
  saveUninitialized: true,
  resave: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/ldap', cors(corsOptions), require('./nodeServer/routes/ldap')());
app.use('/users', cors(corsOptions), require('./nodeServer/routes/users')());
app.use('/snow', cors(corsOptions), require('./nodeServer/routes/snow')())
  // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;