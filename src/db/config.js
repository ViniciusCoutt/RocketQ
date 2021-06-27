const sqlite3 = require("sqlite3");
const { open } = require("sqlite") // Pegamos apenas a função open que precisamos para abrir uma conexão com o bd

module.exports = () => 
    open({ 
        filename: './src/db/rocketq.sqlite', //Definindo o caminho da pasta banco de dados
        driver: sqlite3.Database, // O driver é quem comanda o arquivo acima a partir de nossas instruções
});
