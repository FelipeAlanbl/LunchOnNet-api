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
      },
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

  User.prototype.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  }

  User.prototype.generateToken = function() {
      return jwt.sign({id: this.id }, process.env.APP_SECRET);
  }



  return User;
};
