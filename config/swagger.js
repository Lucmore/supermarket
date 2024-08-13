const swaggerAutogen = require('swagger-autogen')();

const doc ={
    info:{
        title: 'Supermarket API',
        description: 'API para gerenciar produtos de um supermercado',
    },
    host: 'localhost:5000',
    schemes: ['http'],
}

const outputFile = './swagger_output.json'
const endpointFiles = ['./routes/ProductsRoutes.js']

swaggerAutogen(outputFile, endpointFiles, doc)