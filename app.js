const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const database = require('./config/db')
const productRoutes = require('./routes/ProductsRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./config/swagger_output.json')

app.use(bodyparser.json())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(productRoutes)

database
    .authenticate()
    .then(() =>{
        console.log("Banco de dados conectado com sucesso")
    }).catch((msgErro) =>{
        console.log(msgErro)
    })

module.exports = app;