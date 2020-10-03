const express = require("express");
const app = express();

const games = require("./routes/gamesRoute");


app.use(express.static('public'));

app.use('/', games); 

// apresenta a lista de musicas em forma de tabela
app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
})

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app;