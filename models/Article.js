const { Model, DataTypes } = require("sequelize");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.TEXT,
        },
        userId: {
          type: DataTypes.BIGINT.UNSIGNED,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "article", // Nombre del modelo en singular y en minúscula.
      },
    );

    Article.associate = function (models) {
      Article.belongsTo(models.User, {
        foreignKey: "userId",
        as: "author",
      });
    };

    return Article;
  }
}

module.exports = Article;
