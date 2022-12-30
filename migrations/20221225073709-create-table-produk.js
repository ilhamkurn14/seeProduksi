"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("produk", {
      kode_produk: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_produk: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kategori: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga_produk: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("produk");
  },
};
