const validator = require('validator');

exports.hash = (req, res, next, hash) => {
  if (validator.isHash(hash, 'sha1')) {
    next()
  }
  else {
    next(new Error(`${hash} has to be sha1`))
  }
}