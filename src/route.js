const express = require('express'); /* Importando o express */

const route  = express.Router() /* A constante 'route' guarda todas as funcionalidades de rotas que o express tem */

/**** DEFININDO AS ROTAS ****/
// Requisition e Response
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))


module.exports = route // Exportando a const route
