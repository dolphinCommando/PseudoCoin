const router = require('express').Router();
var dbController = require('../../controllers/dbController');

router
  .route('/wallet')
  .get(dbController.sumDeposit)
  .post(dbController.addDeposit)

router
  .route('/wallet/more')
  .get(dbController.getDeposit)

router.route('/coins').get(dbController.getCoins);
router.route('/coins/:id')
  .get(dbController.findCoin)
  .put(dbController.updateCoin)
  .delete(dbController.deleteCoin)

module.exports = router;