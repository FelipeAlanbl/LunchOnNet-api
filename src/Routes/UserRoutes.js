const express = require('express');
const UserRoutes = express.Router();
const UserController = require('../Controller/UserController');

UserRoutes.get('/', (req, res) => UserController.getAll(req, res));
UserRoutes.get('/total', (req, res) => UserController.totalUsers(req, res));
UserRoutes.get('/:id', (req, res) => UserController.getById(req, res));
UserRoutes.put('/:id', (req, res) => UserController.update(req, res));
UserRoutes.delete('/:id', (req, res) => UserController.delete(req, res));



module.exports = UserRoutes;