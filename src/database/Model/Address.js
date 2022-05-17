module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          number: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          city: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          state: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          idClient: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Client',
              key: 'id'
            }
          }
    }, {
        freezeTableName: true,
        timestamps: true,
        underscored: true
    });

    Address.associate = models => {
        Address.belongsTo(models.Client, { foreignKey: "idClient" });
    }

    return Address;
}