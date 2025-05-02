const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
// A "pool" is a collectaion of clients - it holds onto those connections.
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "nathan_pulsemedica",
  database: "top_users",
  password: "<role_password>",
  port: 5432 // The default port of postgresql.
});
