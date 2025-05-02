const pool = require("../Pool")

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

// Good to have all your db related functions as async.
async function main(){
    console.log("Seeding database...")
    await pool.query(SQL)
    console.log("Done seeding database.")
}

main();
