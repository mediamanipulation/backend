import openDb from './index.js';

async function setupDatabase() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      desc TEXT NOT NULL,
      price REAL NOT NULL,
      cover TEXT NOT NULL
    );
  `);
  console.log('Books table created successfully.');
}

async function insertMockData() {
  const db = await openDb(); // Ensure db is opened inside the function
  const insertStatement = `
    INSERT INTO books (title, desc, price, cover) VALUES (?, ?, ?, ?);
  `;

  // Prepare mock data
  const mockData = [];
  for (let i = 1; i <= 20; i++) { // Adjusted to prevent duplicates if needed
    mockData.push([`Book Title ${i}`, `Description of book ${i}`, 10.99 + i, `https://images.unsplash.com/photo-1707058665477-560297ffe913?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`]);
  }

  try {
    await db.exec('BEGIN;');
    for (const data of mockData) {
      await db.run(insertStatement, data);
    }
    await db.exec('COMMIT;');
    console.log('Database and mock data setup complete.');
  } catch (error) {
    await db.exec('ROLLBACK;');
    console.error('Failed to insert mock data:', error);
  }
}

export { setupDatabase, insertMockData };
