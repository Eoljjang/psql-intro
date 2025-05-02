// const pool = require("./pool"); // Import the exported pool from pool.js
const pool = require("../Pool");


async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM USERNAMES");
    return rows;
}

async function insertUsername(username) {
    // The "$1" tells psql to take the first argument. This is to avoid sql injection.
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

// Export your queries.
module.exports = {
    getAllUsernames,
    insertUsername
}
