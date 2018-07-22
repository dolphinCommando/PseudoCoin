var router = require('express').Router();
var cryptoRoutes = require('./cryptoRoutes');

router.use('/crypto', cryptoRoutes);

module.exports = router;
