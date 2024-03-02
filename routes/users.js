// Requirements
const express = require('express');
const router = new express.Router();
const usersController = require('../controllers/users');

//Routes
router.get('', usersController.getAll);

router.get('/:id', usersController.getSingle)

module.exports = router;