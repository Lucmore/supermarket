const { Sequelize } = require('@sequelize/core')
const { MariaDbDialect } = require('@sequelize/mariadb')
require('dotenv').config()

const connection = new Sequelize({
    dialect: MariaDbDialect,
    database: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    showWarnings: true, 
    connectTimeout: 1000,
})

module.exports = connection
