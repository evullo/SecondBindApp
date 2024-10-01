import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

class Inventory extends Model {}

Inventory.init({
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  genre: DataTypes.STRING,
  publicationDate: DataTypes.DATEONLY,
  isbn: DataTypes.NUMBER
}, {
  sequelize,
  modelName: 'inventory',
  freezeTableName: true
});

export default Inventory;