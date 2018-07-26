var router = require('express').Router();
var crypto = require('../../controllers/cryptoController');
/*
  /api/crypto
*/
router.route('/crypto').get(crypto.recommendedCoins)

router.route('/crypto/top').get(crypto.topCoins)

router.route('/crypto/market').post(crypto.marketDisplay)

router.route('/crypto/history/:sym').get(crypto.coinHistory)

module.exports = router;

