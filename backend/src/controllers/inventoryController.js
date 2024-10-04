import Inventory from '../models/inventory.js';
import { validateISBN } from '../utils/isbnValidator.js';

// Get all books method
export const getAllBooks = async (req, res) => {
  try {
    const books = await Inventory.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Get all books error' });
  }
};

// Add new book method
export const addBook = async (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.body;

  // Validate data
  if (!title || !author) {
    return res.status(400).json({ message: 'The fields title and author are required' });
  }
  
  if(!validateISBN(isbn)) {
    return res.status(400).json({ message: 'ISBN number is not valid' });
  }

  // Add new data to the database
  try {
    const newBook = await Inventory.create({
      title,
      author,
      genre,
      publicationDate,
      isbn
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Add book error' });
  }
};

// Populate database method
export const populateInventory = async () => {
  await Inventory.bulkCreate([
    {
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      publicationDate: '1949-06-08',
      isbn: 123456789
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      genre: 'Science Fiction',
      publicationDate: '1932-08-01',
      isbn: 987654321
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      genre: 'Dystopian',
      publicationDate: '1953-10-19',
      isbn: 112233445
    }
  ]);
};
