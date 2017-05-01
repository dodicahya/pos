'use strict'

const models = require('../models')
const Sequelize = require('sequelize')


let OrdersDao = module.exports = {}

OrdersDao.createOrder = (data)=>{ 
 return models.Orders.build(data).save()
}