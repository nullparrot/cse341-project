// Requirements
const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contacts');

//Routes
router.get('', contactsController.getAll);

router.get('/:id', contactsController.getSingle)

module.exports = router;