module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Categories', {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allownull: false,
      },
      title: {
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
    queryInterface.dropTable('Categories');
  },
};
