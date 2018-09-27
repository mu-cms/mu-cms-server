const PromiseRouter = require('express-promise-router');
const router = new PromiseRouter();
const controller = require('./controller');
const param = require('./param');

router.param('blob', param.sha1);
router.get('/:blob', controller.loadByText);
router.get('/:tree/:path([^$]+)', controller.loadByTree);

module.exports = router;