const router = require('express').Router();
var dbController = require('../../controllers/dbController');

router.route('/wallet/:user')
  .get(dbController.sumDeposit)
  .post(dbController.addDeposit)

router
  .route('/wallet/:user/more')
  .get(dbController.getDeposit)

router.route('/coins/:user')
  .get(dbController.getCoins)
  .post(dbController.createCoin);

router.route('/coins/:user/:symbol')
  .get(dbController.findCoin)
  .put(dbController.updateCoin)
  .delete(dbController.deleteCoin)

router.route('/login').post(dbController.verifyUser);

router.route('/register').post(dbController.registerUser);

module.exports = router;