'use strict'

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Items_detail', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    total: {
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
    tableName: 'item_detail',
    classMethods: {
      associate(models) {
        this.belongsTo(models.Items, {          
          foreignKey: 'item_id'
        })
      }
    }
  })
}
