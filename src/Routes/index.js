const express = require('express');
const Routes = express.Router();

const AuthMiddleware = require('../middleware/AuthMiddleware')

const AuthRoutes = require('./AuthRoutes');
const UserRoutes = require('./UserRoutes');
const AdminRoutes = require('./AdminRoutes');
const ClientRoutes = require('./ClientRoutes');
const OwnerRoutes = require('./OwnerRoutes');
const EstablishmentRoutes = require('./EstablishmentRoutes')

Routes.use('/auth', AuthRoutes);

Routes.use(AuthMiddleware);
Routes.use('/user', UserRoutes);
Routes.use('/admin', AdminRoutes);
Routes.use('/client', ClientRoutes);
Routes.use('/owner', OwnerRoutes);
Routes.use('/establishment', EstablishmentRoutes);

module.exports = Routes;