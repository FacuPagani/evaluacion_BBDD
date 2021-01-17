const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.index)
router.post('/', indexController.save);

router.delete('/:id', indexController.delete);

module.exports = router;