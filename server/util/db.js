const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "12341234",
  host: "localhost",
  port: 5432,
  database: "test",
});
module.exports = pool;