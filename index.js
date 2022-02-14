const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to My Calc");
});

app.post("/updatedata", (req, res) => {
  console.log("reached update table");

  const {
    date,
    item,
    price,
    quantitypurchased,
    unit,
    quantitysold,
    costcollected,
  } = req.body;
  res.send("reached update table");
  console.log(req.body);
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server listening at port 3001");
  });
});
