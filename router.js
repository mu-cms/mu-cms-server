const PromiseRouter = require('express-router-wrapper');
const controller = require('./controller');
const router = new PromiseRouter();

router.get('/:tree/*', controller.loadByPath);

module.exports = router.getOriginal();