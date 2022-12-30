function createModelAdmin(Sequelize, DataTypes) {
  const Admin = Sequelize.define(
    "Admin",
    {
      email_admin: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_admin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_admin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role_admin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_owner: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "owner",
          key: "email_owner",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "admin",
    }
  );
  return Admin;
}

module.exports = createModelAdmin;
