const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tehnicar33",
  database: "clothingstore",
  port: 3306,
  multipleStatements: true,
});

module.exports.connection = connection;
