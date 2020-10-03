
const express = require('express');
const route = express.Router();
const controller = require('../controller/gamesController');

route.get('/games', controller.getAllGames);
route.get('/games/:id', controller.getGamesByID);

route.get('/titulo', controller.getAllTitulo);
route.get('/titulo/:nome', controller.getGameByName);

route.get('/date', controller.getAllDate);
route.get('/date/:titulo', controller.getDateByTitulo);

module.exports = route 