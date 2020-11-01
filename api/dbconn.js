const { Pool } = require("pg");

const pool = new Pool({
  user: "adm",
  password: "1234",
  database: "poll",
  port: 5432,
  host: "localhost",
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client");
  } else {
    // console.log("Succesful connection")
  }
});

module.exports = pool;
