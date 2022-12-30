"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("owner", {
      email_owner: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name_owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hp_owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },      createdAt: {
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
     await queryInterface.dropTable('owner');
  },
};
