"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admin", {
      email_admin: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name_admin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_admin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role_admin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_owner: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "owner",
          key: "email_owner",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("admin");
  },
};
