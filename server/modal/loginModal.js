const pool = require("../db"); // path to your db.js

module.exports.login = async (username, password) => {
  const query = `SELECT * FROM "User" WHERE username = $1 AND password = $2`;
  const values = [username, password];

  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("Login query error:", error);
    throw error;
  }
};