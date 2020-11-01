const { Pool } = require("pg");

const pool = new Pool({
    user: "",
    password:"",
    database:"",
    port: ,
    host:""
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client')
  } else {
  // console.log("Succesful connection")
  }
 });

module.exports = pool;