import mysql from "mysql";

export const connection = mysql.createPool({
  host: "localhost",
  user: "ukfn6xu5scedqpvz",
  password: "zWRl2Pu92nyN9vxFDx8i",
  database: "bqhhodkotc4lrxmm00ou",
  port: 3306,
  multipleStatements: true,
});
