'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('simples_nacional', [
      {
        id: '45ca6405-2576-47f2-a7b3-3824a08458d6',
        rbt12: 180000,
        nominalrate: 400,
        deduction: 0,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4150,
        icms: 3400
      },
      {
        id: 'a391a1e6-d79b-4aea-b10a-60d296be7ab0',
        rbt12: 360000,
        nominalrate: 730,
        deduction: 5940,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4150,
        icms: 3400
      },
      {
        id: '317094f7-dbc4-4511-8720-337e6ea98667',
        rbt12: 720000,
        nominalrate: 950,
        deduction: 13860,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4200,
        icms: 3350
      },
      {
        id: 'bd04b031-5c7b-4579-910e-7ee572f64c8e',
        rbt12: 1800000,
        nominalrate: 1070,
        deduction: 22500,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4200,
        icms: 3350
      },
      {
        id: '881644f3-f198-46b9-9efd-f1700fcdc677',
        rbt12: 3600000,
        nominalrate: 1430,
        deduction: 87300,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4200,
        icms: 3350
      },
      {
        id: '052adb83-ae5f-4663-a5ce-0eb2995722b7',
        rbt12: 4800000,
        nominalrate: 1900,
        deduction: 37800,
        irpj: 1350,
        csll: 1000,
        cofins: 2827,
        pis: 613,
        cpp: 4210,
        icms: 0
      },
      {
        id: 'c14fc5a6-b892-4cd7-9c95-3f1d0fb1a2c1',
        rbt12: 180000,
        nominalrate: 400,
        deduction: 0,
        irpj: 550,
        csll: 350,
        cofins: 1274,
        pis: 276,
        cpp: 4150,
        icms: 3400
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('simples_nacional', null, {})
  }
}
