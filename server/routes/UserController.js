var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models/User');

router.use(bodyParser.urlencoded({ extended: true }));

// Create a New User
router.post('/', function(req, res) {
  var body = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  User.create(body, function(err, user){
    if (err) {
      return res.status(500).send("There was a problem creating account, please try again later");
    }
    res.status(200).send(user);
  });
});

// Returns All Users
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).send('There was a problem finding users, please try again later');
    }
    res.status(200).send(users);
  });
});

// Get a Single User from the Database
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send("There was a problem finding the user");
    }
    if (!user) {
      return res.status(404).send('No user found.');
    }
    res.status(200).send(user);
  });
});

// Deletes a User from the Database
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send("There was a problem deleting the user, please try again later");
    }
    res.status(200).send(user);
  });
});

// Updates a Single User
router.put('/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {mew: true}, function(err, user) {
    if (err) {
      return res.status(500).send("There was a problem updating the user");
    }
    res.status(200).send(user);
  })
});

module.exports = router;
