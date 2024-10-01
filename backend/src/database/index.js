import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize({
  dialect: config.get('database.dialect'),
  storage: config.get('database.storage')
});

export default sequelize;