var router = require('express').Router();
var passport = require('passport');
/*
router.get('/login', (req, res) => {
  res.send('Logging in');
});
*/
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/profile/home');
});

module.exports = router;

