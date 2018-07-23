var router = require('express').Router();
var crypto = require('../../controllers/cryptoController');
/*
  /api/crypto
*/
router.route('/').get(crypto.recommendedCoins)

router.route('/top').get(crypto.topCoins)

router.route('/market').post(crypto.marketDisplay)

router.route('/history/:sym').get(crypto.coinHistory)

module.exports = router;

