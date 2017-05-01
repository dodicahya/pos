'use strict'

let OrderDao = require('../dao/order-dao')
let ItemsDao = require('../dao/item-dao')
let Orders = module.exports = {}

Orders.createOrder = (data) =>{
	return OrderDao.createOrder(data)
	.then(dataOrder=>{
		let total = dataOrder.dataValues.total
		return ItemsDao.getAll()
		.then(items=>{
			console.log(items)
			
			// ItemsDao.updateItemByOrder()
		})
		// console.log(dataOrder)
	})
}