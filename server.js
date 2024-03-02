const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/");
const usersRouter = require("./routes/users");
const port = process.env.PORT;
const mongodb = require('./db/connect');

//Routes
app.get("/", router);

app.use("/users", usersRouter);


//Get Everything Running
mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });
