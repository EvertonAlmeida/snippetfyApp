module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('snippets', {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allownull: false,
      },
      title: {
        allownull: false,
        type: DataTypes.STRING,
      },
      content: {
        allownull: false,
        type: DataTypes.TEXT,
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
    queryInterface.dropTable('snippets');
  },
};
