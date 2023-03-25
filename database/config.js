const {Sequelize} = require("sequelize")

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "334856Cp",
    database: "repairs_users",
    port: 5432,
    logging: false
})

module.exports = {db}