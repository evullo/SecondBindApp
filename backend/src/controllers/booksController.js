import Inventory from '../models/inventory.js';
import { parse } from 'json2csv';

// Export to JSON format
const exportBooksJson = async (req, res) => {
  try {
    const books = await Inventory.findAll();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to export data as JSON' });
  }
};

// Export to CSV format
const exportBooksCsv = async (req, res) => {
  try {
    const books = await Inventory.findAll({ raw: true });
    const csv = parse(books);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=books.csv');
    res.status(200).end(csv);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Failed to export data as CSV' });
  }
};

export { exportBooksJson, exportBooksCsv };
