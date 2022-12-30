function createModelOwner(Sequelize, DataTypes) {
  const Owner = Sequelize.define(
    "Owner",
    {
      email_owner: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      nama_owner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp_owner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_owner: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: "owner",
    }
  );

  return Owner;
}

module.exports = createModelOwner;
