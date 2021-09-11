const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PlayerModel = require("./models/Player");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://OC:12345@crud.wmgom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  const Player = new PlayerModel({
    name: "Lol you suck Trisha",
    strength: 9,
    agility: 10,
    intelligence: 50,
  });
  try {
    Player.save();
    res.send(Player);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
