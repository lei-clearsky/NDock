var router = require('express').Router();
module.exports = router;

router.use('/users', require('./UserController'));
router.use('/auth', require('./AuthController'));

router.use(function(req, res) {
	res.status(404).end();
});