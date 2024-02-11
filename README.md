# Node.js Express and SQLite API

This project is a scalable and maintainable Node.js application using Express and SQLite. It's designed to provide a RESTful API for a books inventory system, allowing for operations such as creating, reading, updating, and deleting book entries.

## Features

- RESTful API endpoints for managing books.
- SQLite database integration for persistent storage.
- Modular architecture for improved scalability and maintainability.
- Includes CORS middleware for cross-origin requests.
- Uses modern async/await syntax for database operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.x or higher recommended)
- npm or Yarn as your package manager

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mediamanipulation/backend.git
   cd backend


## Install the necessary dependencies:

```
npm install
```
## or if you use Yarn:

```
yarn install
```

## Configuration

### Database Setup
The application uses SQLite, and the database file is expected to be located at `./database.sqlite`. Ensure this file exists or is generated through the application setup process.

in the src/index.js uncomment - await setupDatabase(); and await insertMockData(); -  to install db and comment back out after running once.
```
async function main() {
 // await setupDatabase(); // Uncomment if needed
 //  await insertMockData(); // Uncomment if needed
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

```

### Environment Variables
No environment variables are required for the basic setup. However, you can customize the port and other settings by modifying the `src/index.js` file.

## Running the Application

To run the application, execute:
```
npm start

```
Books API Documentation
This API allows you to perform CRUD operations on a collection of books. Below are the available endpoints and their usage.

Setup
First, ensure you have imported the necessary function in your route definitions:

javascript
Copy code
import openDb from '../db/index.js';
Endpoints
Get All Books
Endpoint: GET /api/books
Description: Retrieves a list of all books.
Response: An array of books.
javascript
Copy code
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
Get a Single Book by ID
Endpoint: GET /api/books/:id
Description: Retrieves details of a specific book by its ID.
Parameters:
id (URL parameter) - The ID of the book.
Response: A single book object if found, or an error message if not found.
javascript
Copy code
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
Create a New Book
Endpoint: POST /api/books
Description: Adds a new book to the collection.
Body Parameters:
title - The title of the book.
desc - A short description of the book.
price - The price of the book.
cover - A URL to an image of the book's cover.
Response: The ID of the newly created book.
javascript
Copy code
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
Update a Book
Endpoint: PUT /api/books/:id
Description: Updates the details of an existing book.
Parameters:
id (URL parameter) - The ID of the book to update.
Body Parameters:
title - The new title of the book.
desc - The new description of the book.
price - The new price of the book.
cover - The new cover image URL of the book.
Response: A success message if the book is updated, or an error message if the book is not found.
javascript
Copy code
export async function updateBook(req, res) {
  const db = await openDb();
  const { id } = req.params;
  const { title, desc, price, cover } = req.body;
  
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
Delete a Book
Endpoint: DELETE /api/books/:id
Description: Removes a book from the collection.
Parameters:
id (URL parameter) - The ID of the book to delete.
Response: A success message if the book is deleted, or an error message if the book is not found.
javascript
Copy code
export async function deleteBook(req, res) {
  const db = await openDb();
  const { id } = req.params;
  
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
Error Handling
All endpoints include basic error handling, responding with an appropriate status code and error message in case of failure.

## License

[MIT](https://choosealicense.com/licenses/mit/)

### Acknowledgments
Node.js team for the amazing runtime environment
Express.js contributors for the robust framework
SQLite team for the lightweight database engine
[Any other acknowledgments]