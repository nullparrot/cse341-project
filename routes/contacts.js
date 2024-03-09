// Requirements
const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contacts');

//Routes
router.get('', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;