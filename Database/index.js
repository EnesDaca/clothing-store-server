// require("dotenv").config();
import mysql from "mysql";

export const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  port: 3306,
  multipleStatements: true,
});

// export const connection = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "tehnicar33",
//   database: "clothingstore",
//   port: 3306,
//   multipleStatements: true,
// });
