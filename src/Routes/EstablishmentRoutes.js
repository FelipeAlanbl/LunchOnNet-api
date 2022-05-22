const express = require('express');
const EstablishmentRoutes = express.Router();
const EstablishmentController = require('../Controller/EstablishmentController');

EstablishmentRoutes.post('/', (req, res) => EstablishmentController.create(req, res));
EstablishmentRoutes.get('/', (req, res) => EstablishmentController.getAll(req, res));
EstablishmentRoutes.get('/owner/:id', (req, res) => EstablishmentController.getByOwnerId(req, res));

module.exports = EstablishmentRoutes;