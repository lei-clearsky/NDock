const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/User');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// Create a New User
router.post('/', (req, res) => {
  const body = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  User.create(body, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem creating account, please try again later');
    }
    res.status(200).send(user);

    return null;
  });

  return null;
});

// Returns All Users
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send('There was a problem finding users, please try again later');
    }
    res.status(200).send(users);
    return null;
  });

  return null;
});

// Get a Single User from the Database
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem finding the user');
    }
    if (!user) {
      return res.status(404).send('No user found.');
    }
    res.status(200).send(user);
    return null;
  });

  return null;
});

// Deletes a User from the Database
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem deleting the user, please try again later');
    }
    res.status(200).send(user);
    return null;
  });
  return null;
});

// Updates a Single User
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { mew: true }, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem updating the user');
    }
    res.status(200).send(user);
    return null;
  });
  return null;
});

module.exports = router;
