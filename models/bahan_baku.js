function createModelBahanBaku(Sequelize, DataTypes) {
  const bahanBaku = Sequelize.define(
    "Bahan_Baku",
    {
      kode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      jenis: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      kategori_bahan: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      harga: {
        type: DataTypes.INTEGER(15),
        allowNull: false,
      },
      satuan: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      stok: {
        type: DataTypes.INTEGER(10),
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
      tableName: "bahan_baku",
    }
  );
  return bahanBaku;
}

module.exports = createModelBahanBaku;
