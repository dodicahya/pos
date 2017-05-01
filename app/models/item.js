'use strict'

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Items', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
     created_at: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.TIME,
      allowNull: true
    }
  },{
    timestamps: false,
    tableName: 'item',
    classMethods: {
      associate(models) {
        this.hasOne(models.Items_detail, {          
          foreignKey: 'item_id'
        })
      },
      associate(models) {
        this.hasMany(models.Orders, {          
          foreignKey: 'item_id'
        })
      }
    }
  })
}
