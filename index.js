require("dotenv").config();
const routes = require("./routes/routes");

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
const app = express();
app.use("/api", routes);
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.listen(3005, () => {
  console.log(`Server Started at ${3005}`);
});
