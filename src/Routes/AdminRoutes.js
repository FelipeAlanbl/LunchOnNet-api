const express = require('express');
const AdminRoutes = express.Router();
const AdminController = require('../Controller/AdminController');

AdminRoutes.post('/', (req, res) => AdminController.create(req, res));



module.exports = AdminRoutes;