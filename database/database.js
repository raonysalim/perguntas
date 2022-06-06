const Sequelize = require('sequelize')
const connection = new Sequelize ('guiaperguntas', 'root', 'Salim@987654321',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection