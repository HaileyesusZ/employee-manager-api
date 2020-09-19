const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const employee = require("./routes/api/employee");

const app = express();

// db

const db = require("./config/keys").mongo;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongo

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

// routes
app.use("/employees", employee);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
