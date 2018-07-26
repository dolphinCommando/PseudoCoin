var router = require('express').Router();
var cryptoRoutes = require('./cryptoRoutes');
var walletRoutes = require('./dbRoutes');

router.use(cryptoRoutes);
router.use(dbRoutes);

module.exports = router;
