const validator = require('validator');

exports.tree = (req, res, next, tree) => {
  if (validator.isHash(tree, 'sha1')) {
    next()
  }
  else {
    next(new Error(`${tree} has to be sha1`))
  }
}