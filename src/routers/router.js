const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/users', UseController.create);
router.get('/users', authMiddleware, UseController.findAll);

router.post('/login', LoginController.signIn);

module.exports = router;
