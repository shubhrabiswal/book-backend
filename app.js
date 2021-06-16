const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./router/auth");
const path = require("path");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(cookieParser());
const authRoutes = require("./router/auth.router");
const bookRoutes = require("./router/book.router")

dotenv.config({ path: "./config.env" });
require("./db/connection");

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api",authRoutes);
app.use("/api",bookRoutes);

  
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT} `);
});
