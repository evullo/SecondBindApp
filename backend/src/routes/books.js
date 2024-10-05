import express from 'express';
import { exportBooksJson, exportBooksCsv } from '../controllers/booksController.js';

const router = express.Router();

router.get('/json', exportBooksJson);
router.get('/csv', exportBooksCsv); 

export default router;