import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './database/index.js';
import inventoryRoutes from './routes/inventory.js';
import { populateInventory } from './controllers/inventoryController.js';

const app = express();
const port = config.get('server.port');

// Middleware registration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.use('/inventory', inventoryRoutes);

// Sync with database and populate it
sequelize.sync({force: true, alter: true})
  .then(() => {
    populateInventory();
    console.log('Database synced and inventory populated');
  })
  .catch(err => console.error('Sync error :', err));

// Server launch
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
