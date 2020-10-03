const games = require('../model/games.json');

const getAllGames = (req, res) => {
    res.status(200).send(games)
};

const getGamesByID = (req, res) => {
    const id = req.params.id

    const gamesFiltrado = games.find((game) => game.id == id)

res.status(200).send(gamesFiltrado)
}

const getAllTitulo = (req, res) => {
        const titulo = games.map((titulo) => titulo.titulo)
        res.status(200).send(titulo)
    
}

const getGameByName = (req, res) => {
    const titulo = req.params.titulo
    const gamesFiltradoPorTitulo = games.filter((game) => game.titulo == titulo)

    res.status(200).send(gamesFiltradoPorTitulo)

}

const getAllDate = (req, res) => {
    const date = games.map((game) => game.date)

    res.status(200).send(date)
}

const getDateByTitulo = (req, res) => {
    const date = req.params.titulo
    const gamesFiltradoPorDate = games.filter((game) => game.date == date)

    res.status(200).send(gamesFiltradoPorDate);
}

module.exports = {
    getAllGames,
    getGamesByID,
    getAllTitulo,
    getGameByName,
    getAllDate,
    getDateByTitulo
}