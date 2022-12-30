"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bahan_baku", {
      kode: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      jenis: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      kategori_bahan: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      harga: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
      },
      satuan: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      stok: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bahan_baku");
  },
};
