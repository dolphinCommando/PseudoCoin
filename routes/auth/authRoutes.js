var router = require('express').Router();
var passport = require('passport');

router.get('/login', (req, res) => {
  res.send('Logging in');
});

router.get('/logout', (req, res) => {
  // handle with passport
  res.send('Logging out');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('You reached the callback URI');
});

module.exports = router;

