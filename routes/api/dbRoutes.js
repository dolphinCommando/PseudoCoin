var router = require('express').Router();
var dbController = require('../../controllers/dbController');

router
  .route('/wallet/deposit')
  .get(dbController.getDeposit)
  .post(dbController.addDeposit)

router
  .route('/wallet/cash')
  .get(dbController.getCash)
  .post(dbController.addCash)

router.route('/coins').get(dbController.getCoins);
router.route('/coins/:id')
  .get(dbController.findCoin)
  .put(dbController.updateCoin)
  .delete(dbController.deleteCoin)

module.exports = router;