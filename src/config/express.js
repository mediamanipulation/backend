import express from 'express';
import cors from 'cors';
import booksRouter from '../api/books.js';

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/books', booksRouter);

  return app;
}

export default createApp;
