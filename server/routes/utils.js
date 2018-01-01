const jwt = require('jsonwebtoken');
const config = require('../env');

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'No token provided.',
    });
  }

  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Failed to authenticate token',
      });
    }

    req.userId = decoded.id;
    next();

    return null;
  });

  return null;
}

module.exports = {
  verifyToken,
};
