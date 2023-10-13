import mysql from "mysql";

export const connection = mysql.createPool({
  host: "files.000webhost.com",
  user: "clothing-store-server",
  password: "Tehnicar33=",
  database: "id21395682_dacamysq",
  // port: 3307,
  multipleStatements: true,
});
