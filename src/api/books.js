

import express from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController.js';


const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;

// ------------------------------------------------


// import express from 'express';
// import openDb from '../db/index.js';

// const router = express.Router();

// router.get('/', async (req, res) => {
//   const db = await openDb();
//   // Route implementation
// });

// // Other routes for /books

// export default router;
