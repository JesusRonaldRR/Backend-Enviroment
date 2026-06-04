const express = require('express');

const router = express.Router();

const {
    login
}   = require('../controllers/authController');

const validarCampos = require('../middlewares/validarCampos');

router.post(
    '/login',
    validarCampos,
    login
);