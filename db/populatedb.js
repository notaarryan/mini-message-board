#! /usr/bin/env node
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});
const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR (225), message VARCHAR(10000), added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);

INSERT INTO messages (username, message)
VALUES
  ('Aryan', 'Hi There'), ('Aryan', 'Hope you like my website');`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
