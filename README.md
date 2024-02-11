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
   git clone https://your-repository-url.git
   cd your-app-name

   Install the necessary dependencies:

bash
Copy code
npm install
or if you use Yarn:

bash
Copy code
yarn install

## Configuration
Database Setup: The application uses SQLite, and the database file is expected to be located at ./database.sqlite. Ensure this file exists or is generated through the application setup process.
Environment Variables: No environment variables are required for the basic setup. However, you can customize the port and other settings by modifying the src/index.js file.

## Running the Application
To run the application, execute:
npm start
or with Yarn:
yarn start

This will start the application on the default port 8800. Access the API at http://localhost:8800/.

## API Endpoints
The application supports the following API endpoints:

GET /books: Retrieves a list of all books.
POST /books: Adds a new book. Requires title, desc, price, and cover in the request body.
GET /books/:id: Retrieves a book by its ID.
PUT /books/:id: Updates a book by its ID. Requires any of title, desc, price, and cover in the request body.
DELETE /books/:id: Deletes a book by its ID.

## Project Structure
The application follows a modular structure for ease of management:

src/: Source files for the application.
api/: API route definitions.
config/: Configuration files, including Express setup.
db/: Database setup and operations.
index.js: Entry point of the application.
Contributing
Contributions to the project are welcome. Please follow the standard fork and pull request workflow.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
