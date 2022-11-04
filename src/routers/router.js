const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const validationSchema = require('../middlewares/validationSchema');
const schemaRegisterUser = require('../schemas/schemaRegisterUser');
const schemaLoginUser = require('../schemas/schemaLoginUser');
const router = express.Router();

router.post('/users', validationSchema(schemaRegisterUser), UseController.create);
router.get('/users', authMiddleware, UseController.findAll);
router.post('/login', validationSchema(schemaLoginUser), LoginController.signIn);

module.exports = router;
