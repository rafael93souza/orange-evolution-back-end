const express = require('express');
const UseController = require('../controllers/User.controllers');
const { middlewaresTest } = require('../middlewares/middlewaresTest');
const router = express.Router();

router.post('/users', middlewaresTest, UseController.create);
router.get('/users', middlewaresTest, UseController.findAll);

module.exports = router;
