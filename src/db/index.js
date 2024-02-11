import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.cached.Database,
  });
}

export default openDb;
