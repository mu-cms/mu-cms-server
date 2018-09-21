const PromiseRouter = require('express-router-wrapper');
const controller = require('./controller');
const router = new PromiseRouter();

router.get('/:tree/:path', controller.loadByPath);

router.param('tree', (req, res, next, tree) => {
  console.log(`got tree: ${tree}`);
  next();
});

router.param('path', (req, res, next, path) => {
  console.log(`got path: ${path}`);
  next();
});

module.exports = router.getOriginal();