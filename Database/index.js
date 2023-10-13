import mysql from "mysql";

export const connection = mysql.createPool({
  host: "https://databases-auth.000webhost.com/index.php?route=/database/structure&db=id21395682_dacamysq",
  user: "id21395682_daca",
  password: "Tehnicar33=",
  database: "id21395682_dacamysq",
  // port: 3307,
  multipleStatements: true,
});
