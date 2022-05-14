const express = require('express');
const Routes = express.Router();

const AuthMiddleware = require('../middleware/AuthMiddleware')

const AuthRoutes = require('./AuthRoutes');
const UserRoutes = require('./UserRoutes');

Routes.use('/auth', AuthRoutes);

Routes.use(AuthMiddleware);
Routes.use('/user', UserRoutes);

module.exports = Routes;