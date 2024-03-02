const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/");
const contactsRouter = require("./routes/contacts");
const port = process.env.PORT;
const mongodb = require('./db/connect');

//Routes
app.get("/", router);

app.use("/contacts", contactsRouter);


//Get Everything Running
mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });
