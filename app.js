'use strict'

const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const routePath = './app/routes/v1/'

const app = express()


// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Warehouse API Play Ground',
        version: '1.0.0',
        description: 'Demonstrating how to use a this microservices'
    },
    basePath: '/'
}

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./app/routes/v1/*.js']
}

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options)

app.get('/api/v1/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})
app.use('/api/v1/api-docs', express.static('./api-docs'))

//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// routes ======================================================================
fs.readdirSync(routePath).forEach((file) => {
    let route = routePath + file
    require(route)(app)
})

app.use(function(err, req, res, next) {
    // err.message = process.env.APP_ENV === 'development' ? err.message : []
    res.status(err.status || 500).send({ message: err.message })
    throw err
})

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
const port = 8081
app.listen(port)
console.log('Express server is running on port '+port)

module.exports = app
