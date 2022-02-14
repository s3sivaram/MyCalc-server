module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
    },
    item: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantitypurchased: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantitysold: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costcollected: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Inventory;
};
