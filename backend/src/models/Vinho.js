const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database'); 

const Vinho = sequelize.define('Vinho', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { notEmpty: true }
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { notEmpty: true }
  },
  nota: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 0, max: 10 }
  },
  foto: {
    type: DataTypes.STRING(255),
    defaultValue: '',
  }
}, {
  timestamps: true, 
  tableName: 'vinhos' 
});

module.exports = Vinho;