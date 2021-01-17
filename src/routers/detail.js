const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');



router.get('/edit/:id', detailController.edicion);
router.put('/edit/:id', detailController.editado);



router.get('/:id', detailController.detail);


module.exports = router;