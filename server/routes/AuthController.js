var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../env');
var User = require('../models/User');
var verifyToken = require('./utils').verifyToken;
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      return res.status(500).send('Error on the server.');
    }

    if (!user) {
      return res.status(404).send('No user found.');
    }

    var isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        auth: false,
        token: null,
      });
    }

    // create a token if user is found and password is valid
    var token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 86400 // expires in 24 hrs
    });

    res.status(200).send({
      auth: true,
      token: token,
    });
  });
});

router.get('/logout', function(req, res) {
  res.status(200).send({
    auth: false,
    token: null,
  });
});

router.post('/register', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var body = {
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
  };

	User.create(body, function(err, user) {
    if (err) {
      return res.status(500).send('There was a problem registering the user.');
    }

		var token = jwt.sign({ id: user._id }, config.SECRET, {
			expiresIn: 86400,
		});

		res.status(200).send({ auth: true, token: token });
	});
});

router.get('/me', verifyToken, function(req, res, next){
  User.findById(req.userId, { password: 0 }, function(err, user) {
    if (err) {
      return res.status(500).send("There was a problem finding the user.");
    }

    if (!user) {
      return res.status(404).send("No user found.");	
    }

    res.status(200).send(user);
  });
});

module.exports = router;
