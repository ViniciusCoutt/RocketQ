
const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId 
        let isRoom = true
        // Enquanto o isRoom for true ele irá rodar
        while(isRoom) {
            // Gera o número da sala
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() *10).toString() :
                roomId += Math.floor(Math.random() *10).toString()
            }

        // Verificar se esse número já existe. O all é para buscar o conteudo selecionado e retorna-lo.
        const roomsExistIds = await db.all(`SELECT id  FROM rooms`) /* O 'some' olha é que ele olha os ids do banco e compara com oque acabou de ser gerado, ao encontrar ele já retorna, sem a necessidade de olhar todos que foram selecionados */
        isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)
     // Se roomExist for false, o id será inserido no banco de dados
        if(!isRoom){
            /**  Inserir o roomId no banco de dados **/
            await db.run(` 
                INSERT INTO rooms (
                    id,
                    pass 
                ) VALUES (
                    ${parseInt(roomId)}, 
                    ${pass}
                )
            `)                  
        }
    }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions
        
        if(questions == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        } 


        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions})

    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}

