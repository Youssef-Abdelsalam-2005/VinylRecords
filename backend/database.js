const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FSAD2024_Records",
  password: "Youssef12345",
  port: 5432,
});

module.exports = pool;
