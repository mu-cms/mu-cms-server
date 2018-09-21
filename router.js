const PromiseRouter = require('express-router-wrapper');
const controller = require('./controller');
const param = require('./param');
const router = new PromiseRouter();

router.param('tree', param.hash);
router.param('hash', param.hash);

router.get('/:blob', controller.loadByHash);
router.get('/:tree/:path([^$]+)', controller.loadByPath);

module.exports = router.getOriginal();