const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const LoginController = require('../controllers/LoginController');
const persController = require('../controllers/personalController');

const router = express.Router();

router.get('/login', LoginController.index);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.post('/login', LoginController.auth);
router.get('/logout', LoginController.logout);
router.get('/personal', LoginController.personal);

router.get('/pers', persController.index);
router.get('/create', persController.create);
router.post('/create', persController.store);
router.post('/pers/delete', persController.destroy);
router.get('/pers/edit/:id', persController.edit);
router.post('/pers/edit/:id', persController.update);

module.exports = router;
