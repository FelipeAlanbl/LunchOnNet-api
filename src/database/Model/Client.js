module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        idUser: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    });

    Client.associate = models => {
        Client.belongsTo(models.User, { foreignKey: "idUser" });
        Client.hasOne(models.Address, { foreignKey: 'idClient' })
    }

    return Client
}