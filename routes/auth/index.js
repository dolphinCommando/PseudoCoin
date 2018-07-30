var router = require('express').Router();
var authRoutes = require('./authRoutes');

router.use(authRoutes);

module.exports = router;