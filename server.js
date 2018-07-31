const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
var passport = require('passport');
var passportSetup = require('../config/passport-setup');
var keys = require('./config/keys');
var cookieSession = require('cookie-session');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(cookieSession({
  maxAge: 1000*3600*24,
  keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pseudocoinDB');


app.listen(PORT, function() {
  console.log(`🌎 ==> API server listening on port ${PORT}`);
});

