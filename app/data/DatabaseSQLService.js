import * as SQLite from "expo-sqlite";

const openDB = async () => {
  // Every change to the database tables, INCREMENT the version number by 1
  const db = await SQLite.openDatabaseAsync("aiProject1.db");
  return db;
};

const createTables = async () => {
  const db = await openDB();

  // CREATE MESSAGE LOG TABLE
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, pos INTEGER, isUser INTEGER, botId INTEGER);`
  );
};

// INSERT MESSAGE
const insertMessage = async (messageData) => {
  const db = await openDB();
  const result = await db.runAsync(
    "INSERT INTO messages (text, pos, isUser, botId) VALUES (?, ?, ?, ?)",
    messageData.text,
    messageData.pos,
    messageData.isUser,
    messageData.botId
  );
  return result.lastInsertRowId;
};

// GET MESSAGES FROM BOTID
const getMessagesByBotId = async (botId) => {
  const db = await openDB();
  const allRows = await db.getAllAsync(
    "SELECT * FROM messages WHERE botId = ?",
    [botId]
  );
  return allRows;
};

// DELETE MESSAGES BY BOTID
const deleteMessagesByBotId = async (botId) => {
  const db = await openDB();
  await db.runAsync("DELETE FROM messages WHERE botId = ?", [botId]);
};

export {
  createTables,
  insertMessage,
  getMessagesByBotId,
  deleteMessagesByBotId,
};
