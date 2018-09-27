const PromiseRouter = require('express-promise-router');
const router = new PromiseRouter();
const param = require('./param');
const controller = require('./controller');

router.param('blob', param.sha1);
router.get('/:blob', controller.loadBlob);
router.get('/:tree/:path([^$]+)', controller.loadPath);

module.exports = router;