const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const db = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
})

passport.use(
  new GoogleStrategy({
    callbackURI: 'auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    db.User.findOne({googleId: profile.id}).then(userRegistered => {
      if (userRegistered) {
        console.log('user is ' + userRegistered)
        done(null, userRegistered)
      }
      else {
        new db.User({
          username: profile.displayName,
          googleId: profile.id
        }).save().then(newUser => {
          console.log('User added! ' + newUser);
          done(null, newUser);
        })
      }
    })
  })
)