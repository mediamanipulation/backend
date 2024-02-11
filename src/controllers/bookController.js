import openDb from '../db/index.js';

// Get all books
export async function getBooks(req, res) {
  const db = await openDb();
  try {
    const books = await db.all("SELECT * FROM books");
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

// Get a single book by ID
export async function getBookById(req, res) {
  const db = await openDb();
  const { id } = req.params;
  try {
    const book = await db.get("SELECT * FROM books WHERE id = ?", [id]);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

// Create a new book
export async function createBook(req, res) {
  const db = await openDb();
  const { title, desc, price, cover } = req.body;
  try {
    const result = await db.run("INSERT INTO books (title, desc, price, cover) VALUES (?, ?, ?, ?)", [title, desc, price, cover]);
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

// Update a book
export async function updateBook(req, res) {
  const db = await openDb();
  const { id } = req.params; // assuming the book ID is passed as a URL parameter
  const { title, desc, price, cover } = req.body; // new values for the book
  
  try {
    const result = await db.run("UPDATE books SET title = ?, desc = ?, price = ?, cover = ? WHERE id = ?", [title, desc, price, cover, id]);
    if (result.changes > 0) {
      res.status(200).json({ message: "Book updated successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}


// Delete a book
export async function deleteBook(req, res) {
  const db = await openDb();
  const { id } = req.params; // assuming the book ID is passed as a URL parameter
  
  try {
    const result = await db.run("DELETE FROM books WHERE id = ?", [id]);
    if (result.changes > 0) {
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

