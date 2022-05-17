module.exports = (sequelize, DataTypes) => {
  const Establishment = sequelize.define("Establishment", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dataAbertura: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    idOwner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Owner",
        key: "id",
      },
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
      },
  }, {
      freezeTableName: true,
      timestamp: true,
      underscored: true,
  });

  Establishment.associate = models => {
      Establishment.belongsTo(models.Owner, { foreignKey: 'idOwner'})
  }

  return Establishment;
};
