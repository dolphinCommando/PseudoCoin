var router = require('express').Router();
var profileRoutes = require('./profileRoutes');

router.use(profileRoutes);

module.exports = router;