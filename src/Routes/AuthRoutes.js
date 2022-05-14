const express = require('express');
const AuthRoutes = express.Router();
const AuthController = require('../Controller/AuthController');

AuthRoutes.post('/login', (req, res) => AuthController.login(req, res));
AuthRoutes.post('/register', (req, res) => AuthController.register(req, res));

module.exports = AuthRoutes;
