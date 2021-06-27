const Database = require("./config") // Importando o que colocamos em config

const initDb = { //guardar as funções
    async init(){ 
        const db = await Database() // async await serve para o codigo esperar na linha o resultado do db antes de ir para proxima. Já que o padrão é o js continuar as linhas seguintes mesmo se a anterior retornou resultado ou não.

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT,
            read INT, 
            room INT
        )`);

        await db.close() // Fechando o banco de dados
    }
}

initDb.init() //Executa a init acima