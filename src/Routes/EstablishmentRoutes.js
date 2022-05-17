const express = require('express');
const EstablishmentRoutes = express.Router();
const EstablishmentController = require('../Controller/EstablishmentController');

EstablishmentRoutes.post('/', (req, res) => EstablishmentController.create(req, res));
EstablishmentRoutes.get('/', (req, res) => EstablishmentController.getAll(req, res));

module.exports = EstablishmentRoutes;