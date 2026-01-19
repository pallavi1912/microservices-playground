const router = require('express').Router();
const controller = require('../controllers/items.controller');

router.get('/',controller.getItems);
router.post('/', controller.createItem);

module.exports = router;