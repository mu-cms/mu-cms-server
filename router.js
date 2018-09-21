const PromiseRouter = require('express-router-wrapper');
const controller = require('./controller');
const param = require('./param');
const router = new PromiseRouter();

router.param('tree', param.tree);

router.get('/:tree/:path([^$]+)', controller.loadByPath);

module.exports = router.getOriginal();