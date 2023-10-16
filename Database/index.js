import mysql from "mysql";

export const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tehnicar33",
  database: "clothingstore",
  port: 3306,
  multipleStatements: true,
});

// DB_HOST = localhost
// DB_USERNAME = root
// DB_PASSWORD = tehnicar33
// DB_NAME= clothingstore
