var router = require('express').Router();
var crypto = require('../../controllers/cryptoController');

router.route('/').get(crypto.currentAvailablePrices)

module.exports = router;

