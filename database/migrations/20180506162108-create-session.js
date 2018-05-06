module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Sessions', {
      sid: {
        type: DataTypes.STRING,
        allownull: false,
        primaryKey: true,
      },
      expires: DataTypes.DATE,
      data: DataTypes.TEXT,
      createdAt: {
        allownull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allownull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Sessions');
  },
};
