const { Router } = require('express')

const { readShoes } = require('../controllers/readShoesController.js')
const { readShoe } = require('../controllers/readShoesController.js');
const createShoe = require('../controllers/createShoesController.js');
const updateShoe = require('../controllers/updateShoesController.js');
const deleteShoe = require('../controllers/deleteShoesController.js');
const validateCreateShoe = require('../middlewares/validateCreateShoe.js');
const validateExistingId = require('../middlewares/validateExistingId.js');

const router = Router();

router.get('/shoes', readShoes);
router.get('/shoes/:id', readShoe);
router.post('/shoes', validateCreateShoe, createShoe);
router.put('/shoes/:id', validateCreateShoe, updateShoe);
router.delete('/shoes/:id', validateExistingId, deleteShoe);

module.exports = router;
