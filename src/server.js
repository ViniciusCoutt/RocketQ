const express = require('express')
const route = require('./route')
const path = require('path')


const server = express() /*Iniciar o express = () e guardando no server */;

server.set('view engine', 'ejs')

server.use(express.static("public")) /* Para usar o conteudo estático da página public */

server.set('views', path.join(__dirname, 'views')) /* Para indicar o caminho da pasta onde está o nosso projeto e junta "path.join". O dirname é para retornar o caminho/path para o diretório pai. Simplificando: .../rocketq/src/views */

server.use(express.urlencoded({extended: true})) 

server.use(route)

server.listen(3000, () => console.log("RODANDO")) /* Passar uma porta ao server */