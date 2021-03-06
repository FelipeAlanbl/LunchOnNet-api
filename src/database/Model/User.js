const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      underscored: true,
      hooks: {
          beforeSave: async user => {
              if(user.password) {
                  user.password = await bcrypt.hash(user.password, 8);
              }
          }
      }
    }
  );

  User.associate = models => {
    User.hasOne(models.Client, { foreignKey: "idUser" });
    User.hasOne(models.Admin, { foreignKey: "idUser" });
    User.hasOne(models.Owner, { foreignKey: "idUser" });
}

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  }

  User.prototype.generateToken = function() {
      return jwt.sign({id: this.id }, process.env.APP_SECRET);
  }



  return User;
};
