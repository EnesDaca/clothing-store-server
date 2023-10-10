import express from "express";
import database from "../Database/index"; // Assuming you have an export from "../Database" with ESM syntax

const product = express();

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
          appData.data = error;
          res.status(500).json(appData);
        } else {
          appData.data = rows;
          res.status(200).json(appData);
        }
        connection.release();
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
          appData.data = error;
          res.status(500).json(appData);
        } else {
          appData.data = rows;
          res.status(200).json(appData);
        }
        connection.release();
      });
    }
  });
});

export default product; // Export the product module with ESM syntax
