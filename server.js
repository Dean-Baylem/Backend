const express = require("express");
const bodyParser = require("body-parser");
const app = express();
import mongoDBPassword from "./credentials";

import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://DBaylem:" + mongoDBPassword + "@cluster0.zual4ys.mongodb.net/triviadb",
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.listen(5000);