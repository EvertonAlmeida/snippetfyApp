module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Users', {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allownull: false,
        type: DataTypes.STRING,
      },
      email: {
        allownull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allownull: false,
        type: DataTypes.STRING,
      },
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
    queryInterface.dropTable('Users');
  },
};
