var router = require('express').Router();
var cryptoRoutes = require('./cryptoRoutes');
var walletRoutes = require('./walletRoutes');

router.use(cryptoRoutes);
router.use(walletRoutes);

module.exports = router;
