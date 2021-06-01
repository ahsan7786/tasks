const Sequelize = require("sequelize");

module.exports = (ORM) => {
  const Todo = ORM.define(
    "Todo",
    {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
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
  return Todo;
};
