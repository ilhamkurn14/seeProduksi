function applyExtraSetup(sequelize) {
  const { Admin, Owner, Bahan_Baku, Produk, Produk_Bahan } = sequelize.models;

  Owner.hasMany(Admin, {
    foreignKey: "email_owner",
    sourceKey: "email_owner",
  });

  Admin.belongsTo(Owner, {
    foreignKey: "email_owner",
    sourceKey: "email_owner",
  });

  // Bahan_Baku.hasMany(Produk_Bahan, {
  //   foreignKey: "kode_bahan",
  //   sourceKey: "kode",
  // });
  
  // Produk.hasMany(Produk_Bahan, {
  //   foreignKey: "kode_produk",
  //   sourceKey: "kode_produk",
  // });

  // Produk.belongsToMany(Bahan_Baku, { through: Produk_Bahan});
  // Bahan_Baku.belongsToMany(Produk, { through: Produk_Bahan});

  // Produk_Bahan.belongsToMany(Produk, {
  //   foreignKey: "kode_produk",
  //   sourceKey: "kode_produk",
  // });

  // Produk_Bahan.belongsTo(Bahan_Baku, {
  //   foreignKey: "kode_bahan",
  //   sourceKey: "kode",
  // });

  Produk.belongsToMany(Bahan_Baku, {
    through: Produk_Bahan,
    as: "Bahan",
    foreignKey: "kode_produk"
  });

  Bahan_Baku.belongsToMany(Produk, {
    through: Produk_Bahan,
    as: "Produk",
    foreignKey: "kode_bahan"
  });

  
}

module.exports = applyExtraSetup;
