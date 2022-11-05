const express = require('express');
const UseController = require('../controllers/User.controllers');
const LoginController = require('../controllers/Login.controller');
const LoginAdminController = require('../controllers/LoginAdmin.controller');
const StatusClassesController = require('../controllers/StatusClasses.controller');
const TrailsController = require('../controllers/Trails.controller');
const AdminController = require('../controllers/Admin.controllers');
const ClassesController = require('../controllers/Classes.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const validationSchema = require('../middlewares/validationSchema');
const schemaRegisterUser = require('../schemas/schemaRegisterUser');
const schemaLoginUser = require('../schemas/schemaLoginUser');
const schemaRegisterTrails = require('../schemas/schemaRegisterTrails');
const schemaRegisterClasses = require('../schemas/schemaRegisterClasses');
const schemaRegisterAdmin = require('../schemas/schemaRegisterAdmin');
const { authMiddlewareAdmin } = require('../middlewares/auth.middlewareAdmin');
const schemaLoginAdmin = require('../schemas/schemaLoginAdmin');
const router = express.Router();

router.post('/users', validationSchema(schemaRegisterUser), UseController.create);
router.post('/login/admin', validationSchema(schemaLoginAdmin), LoginAdminController.signIn);
router.post('/login', validationSchema(schemaLoginUser), LoginController.signIn);

router.use(authMiddleware)
router.get('/user', UseController.detailUser);
router.get('/trails', TrailsController.findAll);
router.get('/classes/:curso_id', ClassesController.detailClasses);
router.get("/status/:usuario_id", StatusClassesController.detailStatusClasses);


router.use(authMiddlewareAdmin);
router.get('/users', UseController.findAll);
router.get('/classes', ClassesController.findAll);

router.get('/admin', AdminController.findAll);
router.post('/admin', validationSchema(schemaRegisterAdmin), AdminController.create);

router.post('/trails', validationSchema(schemaRegisterTrails), TrailsController.create);

router.post('/classes/:id', validationSchema(schemaRegisterClasses), ClassesController.create);
router.get("/status", StatusClassesController.findAll)
module.exports = router;
