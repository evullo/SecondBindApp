import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/index.js';

class Inventory extends Model {}

Inventory.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicationDate: {
    type: DataTypes.DATEONLY, 
    allowNull: false
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'inventory',
  freezeTableName: true
});

export default Inventory;