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
    mockData.push([`Book Title ${i}`, `Description of book ${i}`, 10.99 + i, `https://example.com/cover${i}.jpg`]);
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
