import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import product from "./Routes/product.js";

const app = express();

app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.use("/product/api/", product);

app.use("/", express.static("Uploads"));

const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log("App is running on port - " + PORT);
});
