const Sequelize = require("sequelize");

module.exports = (ORM) => {
  const SubTask = ORM.define(
    "Task",
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return SubTask;
};
