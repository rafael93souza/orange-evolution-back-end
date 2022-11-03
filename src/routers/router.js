const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const { middlewaresTest } = require('../middlewares/middlewaresTest');
const router = express.Router();

router.post('/users', middlewaresTest, UseController.create);
router.get('/users', middlewaresTest, UseController.findAll);
router.post('/login', LoginController.signIn);

module.exports = router;
