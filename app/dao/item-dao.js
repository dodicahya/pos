'use strict'

const {
    items
} = require('../models/index')
const models = require('../models')
const Sequelize = require('sequelize')

// Export ItemDAO object
let ItemDAO = module.exports = {}

ItemDAO.getAll = ()=>{ 
 return models.Items.findAll({
 	where:{
 		deleted_at:{
 			$eq:null
 		}
 	}
 })	
}

ItemDAO.getById = (id)=>{ 
 return models.Items.findOne({
 	where:{
 		id:id,
 		deleted_at:{
 			$eq:null
 		}
 	}
 })	

}

ItemDAO.getDetailByItemId = (id)=>{ 
 return models.Items_detail.findOne({
 	where:{ 		
 		item_id:id,
 		deleted_at:{
 			$eq:null
 		}
 	},
 	include:[{
 		model:models.Items,
 		where:{
 			deleted_at:{
 				$eq:null
 			}
 		}
 	}]
 })	
}
ItemDAO.updateItemByOrder = (data)=>{ 
 return models.Items.update(data,{
 	where:{
 		deleted_at:{
 			$eq:null
 		}
 	}
 })	
}