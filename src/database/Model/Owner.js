module.exports = (sequelize, DataTypes) => {
    const Owner = sequelize.define('Owner', {
        idUser: {
            type: DataTypes.INTEGER,
            references: {
              model: 'User',
              key: 'id'
            }
          }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    Owner.associate = models => {
        Owner.belongsTo(models.User, { foreignKey: 'idUser' });
        Owner.hasMany(models.Establishment, { foreignKey: 'idOwner' });
    }

    return Owner
}