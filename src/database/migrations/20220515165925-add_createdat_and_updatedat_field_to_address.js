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
      queryInterface.addColumn('Address', 'created_at', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      }),
      queryInterface.addColumn('Address', 'updated_at', {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
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
      queryInterface.removeColumn('Address', 'created_at'),
      queryInterface.removeColumn('Address', 'updated_at')
    ])
  }
};
