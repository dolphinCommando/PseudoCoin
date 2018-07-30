const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
  new GoogleStrategy({
    callbackURI: 'auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    
  })
)