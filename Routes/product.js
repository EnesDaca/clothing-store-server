const express = require("express");
const product = express();
const database = require("../Database");

product.get("/getCategories", (req, res) => {
  let appData = {
    isError: false,
    data: [],
  };
  database.connection.getConnection((err, connection) => {
    if (err) {
      appData.isError = true;
      appData.data = err;
      res.status(500).json(appData);
    } else {
      connection.query("SELECT * FROM categories", (error, rows) => {
        if (error) {
          appData.isError = true;
          appData.data = error; // Change from err to error here
          res.status(500).json(appData);
        } else {
          appData.data = rows;
          res.status(200).json(appData);
        }
        connection.release(); // Release the connection when done
      });
    }
  });
});

product.get("/getProducts", (req, res) => {
  let appData = {
    isError: false,
    data: [],
  };
  database.connection.getConnection((err, connection) => {
    if (err) {
      appData.isError = true;
      appData.data = err;
      res.status(500).json(appData);
    } else {
      connection.query("SELECT * from products", (error, rows) => {
        if (error) {
          appData.isError = true;
          appData.data = error; // Change from err to error here
          res.status(500).json(appData);
        } else {
          appData.data = rows;
          res.status(200).json(appData);
        }
        connection.release(); // Release the connection when done
      });
    }
  });
});

module.exports = product;
