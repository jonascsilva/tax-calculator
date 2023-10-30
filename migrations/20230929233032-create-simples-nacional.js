'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('simples_nacional', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      rbt12: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nominalrate: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      deduction: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      irpj: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      csll: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cofins: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      pis: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cpp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      icms: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('simples_nacional')
  }
}
