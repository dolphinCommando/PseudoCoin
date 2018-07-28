var router = require('express').Router();
var dbController = require('../../controllers/dbController');

router
  .route('/wallet/deposit')
  .get(dbController.sumDeposit)
  .post(dbController.addDeposit)

router
  .route('/wallet/cash')
  .get(dbController.sumCash)
  .post(dbController.addCash)

router
  .route('/wallet/deposit/more')
  .get(dbController.getDeposit)

router
  .route('/wallet/cash/more')
  .get(dbController.getCash)

router.route('/coins').get(dbController.getCoins);
router.route('/coins/:id')
  .get(dbController.findCoin)
  .put(dbController.updateCoin)
  .delete(dbController.deleteCoin)

module.exports = router;