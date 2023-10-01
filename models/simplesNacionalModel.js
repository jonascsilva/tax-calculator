const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

class SimplesNacional extends Model {}

SimplesNacional.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    rbt12: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nominalrate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deduction: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    irpj: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    csll: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cofins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    icms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'SimplesNacional',
    tableName: 'simples_nacional',
    timestamps: false,
  }
);

module.exports = SimplesNacional;
