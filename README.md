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
# Endpoints
<span style="color:blue">some *blue* text</span>.
 Get All Books
- Endpoint: GET /api/books
- Description: Retrieves a list of all books.
- Response: An array of books.

Get a Single Book by ID
- Endpoint: GET /api/books/:id
- Description: Retrieves details of a specific book by its ID.
-  Parameters:
  -- id (URL parameter) - The ID of the book.
 - Response: A single book object if found, or an error message if not found.

Create a New Book
-  Endpoint: POST /api/books
-  Description: Adds a new book to the collection.
-  Body Parameters:
  --  title - The title of the book.
  -- desc - A short description of the book.
  -- price - The price of the book.
  -- cover - A URL to an image of the book's cover.
  - Response: The ID of the newly created book.

Update a Book
- Endpoint: PUT /api/books/:id
- Description: Updates the details of an existing book.
- Parameters:
  --  id (URL parameter) - The ID of the book to update.
- Body Parameters:
  --  title - The new title of the book.
  --  desc - The new description of the book.
  --  price - The new price of the book.
  --  cover - The new cover image URL of the book.
- Response: A success message if the book is updated, or an error message if the book is not found.

 Delete a Book
- Endpoint: DELETE /api/books/:id
- Description: Removes a book from the collection.
- Parameters:
  --  id (URL parameter) - The ID of the book to delete.
- Response: A success message if the book is deleted, or an error message if the book is not found.
- 
Error Handling
- All endpoints include basic error handling, responding with an appropriate status code and error message in case of failure.

## License

[MIT](https://choosealicense.com/licenses/mit/)

### Acknowledgments
Node.js team for the amazing runtime environment
Express.js contributors for the robust framework
SQLite team for the lightweight database engine
[Any other acknowledgments]
