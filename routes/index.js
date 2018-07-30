var router = require('express').Router();
var path = require('path');
var api = require('./api');
var auth = require('./auth');

router.use('/api', api);
router.use('/auth', auth);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;