import mysql from "mysql";

export const connection = mysql.createPool({
  host: "localhost",
  user: "id21395682_daca",
  password: "Tehnicar33=",
  database: "id21395682_dacamysq",
  port: 5000,
  multipleStatements: true,
});
