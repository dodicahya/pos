'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'pos','root','', {
    dialect: 'mysql',
    protocol: 'mysql',
    host: 'localhost',
    // port: 8080,
    logging: console.log,
    define: {
      timestamps: false
    },
    timezone: '+07:00'
  }
)

const db = {}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
