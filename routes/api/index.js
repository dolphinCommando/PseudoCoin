var router = require('express').Router();
var dbRoutes = require('./dbRoutes');

router.use(dbRoutes);

module.exports = router;
