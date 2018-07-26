var router = require('express').Router();
var dbController = require('../../controllers/dbController');

router.route('/wallet').get(dbController.getWallet);
router.route('/wallet/in').put(dbController.addCash)
router.route('/wallet/out').put(dbController.addCash)

router.route('/coins').get(dbController.getCoins);
router.route('/coins/:id')
  .get(dbController.findCoin)
  .update(dbController.updateCoin)
  .delete(dbController.deleteCoin)

module.exports = router;