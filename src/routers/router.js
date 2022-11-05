const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const TrailsController = require('../controllers/Trails.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const validationSchema = require('../middlewares/validationSchema');
const schemaRegisterUser = require('../schemas/schemaRegisterUser');
const schemaLoginUser = require('../schemas/schemaLoginUser');
const schemaRegisterTrails = require('../schemas/schemaRegisterTrails');
const router = express.Router();

router.post('/users', validationSchema(schemaRegisterUser), UseController.create);
router.get('/users', authMiddleware, UseController.findAll);
router.post('/login', validationSchema(schemaLoginUser), LoginController.signIn);
router.post('/trails', validationSchema(schemaRegisterTrails), TrailsController.create);
router.get('/trails', TrailsController.findAll);

module.exports = router;
