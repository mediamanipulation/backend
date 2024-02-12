import createApp from './config/express.js';
//  import { setupDatabase, insertMockData } from './db/initialSetup.js';

const app = createApp();
const PORT = 8800;

async function main() {
// await setupDatabase(); // Uncomment if needed
// await insertMockData(); // Uncomment if needed
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main().catch(console.error);
