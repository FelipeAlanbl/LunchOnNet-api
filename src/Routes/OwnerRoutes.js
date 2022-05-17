const express = require('express');
const OwnerRoutes = express.Router();
const OwnerController = require('../Controller/OwnerController');;

OwnerRoutes.post('/', (req, res) => OwnerController.create(req, res));

module.exports = OwnerRoutes;