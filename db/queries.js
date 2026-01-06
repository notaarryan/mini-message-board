const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(`
    SELECT
      id,
      username,
      message,
      added AT TIME ZONE 'America/Toronto' AS added
    FROM messages;
  `);
  return rows;
}

async function addNewMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message) VALUES ($1, $2);",
    [username, message]
  );
}

module.exports = {
  getAllMessages,
  addNewMessage,
};
