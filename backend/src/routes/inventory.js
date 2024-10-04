import express from 'express';
import { getAllBooks, addBook } from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/add', addBook);

export default router;