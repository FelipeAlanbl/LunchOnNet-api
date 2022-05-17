const express = require('express');
const ClientRoutes = express.Router();
const ClientController = require('../Controller/ClientController');;

ClientRoutes.post('/', (req, res) => ClientController.create(req,res));

module.exports = ClientRoutes;