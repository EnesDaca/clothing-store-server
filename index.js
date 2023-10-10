import express from "express";
const app = express();
import cors from "cors";
import bodyparser from "body-parser";

app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

const product = require("./Routes/product");
app.use("/product/api/", product);

const payment = require("./Routes/payment");
app.use("/api", payment);

app.use("/", express.static("Uploads"));

const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log("App is running on port - " + PORT);
});
