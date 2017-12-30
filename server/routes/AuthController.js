const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../env');
const User = require('../models/User');
const { verifyToken } = require('./utils');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).send('Error on the server.');
    }

    if (!user) {
      return res.status(404).send('No user found.');
    }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        auth: false,
        token: null,
      });
    }

    // create a token if user is found and password is valid
    const token = jwt.sign(
      { id: user._id }, // eslint-disable-line no-underscore-dangle
      config.SECRET,
      { expiresIn: 86400 },
    );

    res.status(200).send({
      auth: true,
      token,
    });

    return null;
  });
});

router.get('/logout', (req, res) => {
  res.status(200).send({
    auth: false,
    token: null,
  });
  return null;
});

router.post('/register', (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const body = {
    email: req.body.email,
    password: hashedPassword,
  };

  User.create(body, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem registering the user.');
    }

    const token = jwt.sign(
      { id: user._id }, // eslint-disable-line no-underscore-dangle
      config.SECRET,
      { expiresIn: 86400 },
    );

    res.status(200).send({ auth: true, token });

    return null;
  });
  return null;
});

router.get('/me', verifyToken, (req, res) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) {
      return res.status(500).send('There was a problem finding the user.');
    }

    if (!user) {
      return res.status(404).send('No user found.');
    }

    res.status(200).send(user);
    return null;
  });
  return null;
});

module.exports = router;
