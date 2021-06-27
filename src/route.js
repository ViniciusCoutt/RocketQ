const express = require('express') /* Importando o express */
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route  = express.Router() /* A constante 'route' guarda todas as funcionalidades de rotas que o express tem */

/**** DEFININDO AS ROTAS ****/
// Requisition e Response
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index) // Formato que o fomormulario de dentro da modal tem que passar a informação


module.exports = route // Exportando a const route
