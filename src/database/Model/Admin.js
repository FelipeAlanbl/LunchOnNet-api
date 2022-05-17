module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      idUser: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );

  Admin.associate = models => {
      Admin.belongsTo(models.User, { foreignKey: "idUser" });
  }

  return Admin;
};
