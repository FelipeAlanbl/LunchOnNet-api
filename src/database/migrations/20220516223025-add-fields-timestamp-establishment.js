'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Establishment', 'status', {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('Establishment', 'created_at', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      }),
      queryInterface.addColumn('Establishment', 'updated_at', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Establishment', 'status'),
      queryInterface.removeColumn('Establishment', 'created_at'),
      queryInterface.removeColumn('Establishment', 'updated_at'),
    ])
  }
};
