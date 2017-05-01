'use strict'

let ItemDao = require('../dao/item-dao')
let Items = module.exports = {}

Items.getAllData = () =>{
	return ItemDao.getAll()
}
Items.getItemById = (id) =>{
	return ItemDao.getById(id)
}

Items.getDetailByItemId = (id) =>{
	return ItemDao.getDetailByItemId(id)
}
