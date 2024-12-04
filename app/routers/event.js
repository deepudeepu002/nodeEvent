const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');


router.post('/', eventController.create);
router.get('/', eventController.findAll);
router.get('/:id', eventController.findOne);
router.delete('/:id', eventController.destroy);

module.exports = router;
