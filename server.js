const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/");
const contactsRouter = require("./routes/contacts");
const swaggerRouter = require("./routes/swagger")
const port = process.env.PORT;
const mongodb = require("./db/connect");
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//Routes
app.get("/", router);

app.use("/contacts", contactsRouter);
app.use("/api-docs", swaggerRouter);

//Get Everything Running
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
