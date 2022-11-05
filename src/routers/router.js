const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const TrailsController = require('../controllers/Trails.controller');
const ClassesController = require('../controllers/Classes.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const validationSchema = require('../middlewares/validationSchema');
const schemaRegisterUser = require('../schemas/schemaRegisterUser');
const schemaLoginUser = require('../schemas/schemaLoginUser');
const schemaRegisterTrails = require('../schemas/schemaRegisterTrails');
const schemaRegisterClasses = require('../schemas/schemaRegisterClasses');
const router = express.Router();

router.post('/users', validationSchema(schemaRegisterUser), UseController.create);
router.get('/users', authMiddleware, UseController.findAll);
router.post('/login', validationSchema(schemaLoginUser), LoginController.signIn);

router.post('/trails', validationSchema(schemaRegisterTrails), TrailsController.create);
router.get('/trails', TrailsController.findAll);

router.post('/classes/:id', validationSchema(schemaRegisterClasses), ClassesController.create);
router.get('/classes', ClassesController.findAll);
router.get('/classes/:curso_id', ClassesController.detailClasses);

module.exports = router;
