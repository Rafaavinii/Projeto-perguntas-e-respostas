const Sequelize =  require("sequelize")
const connection = require("./database")

const Resposta = connection.define('resposta', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false }) //Não recriar a tabela
module.exports = Resposta