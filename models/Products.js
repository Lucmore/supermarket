const connection = require('../config/db')
const { Sequelize } = require('@sequelize/core')

const Product = connection.define('products', {
    barcode: {type: Sequelize.STRING, allowNull: false},
    name: {type: Sequelize.TEXT, allowNull: false},
    price: {type: Sequelize.FLOAT, allowNull: false},
    description: {type: Sequelize.TEXT, allowNull: false},
    stock: {type: Sequelize.INTEGER, allowNull: false, defaultValue:0},
})

Product.sync({force: false})
    .then(() =>{
        console.log('Tabela product sincronizada com sucesso')
    }).catch((error) =>{
        console.log('Erro ao sincronizar tabela: ' + error)
    })

    module.exports = Product;