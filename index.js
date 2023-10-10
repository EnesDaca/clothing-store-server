import express from "express";
import cors from "cors";
import product from "./product";

const app = express();

app.use(cors());

app.use("/product/api/", product);

app.use("/", express.static("Uploads"));

const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log("App is running on port - " + PORT);
});
