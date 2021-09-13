const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PlayerModel = require("./models/Player");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://OC:12345@crud.wmgom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/", async (req, res) => {
  const { name, str, agi, int, charClass } = req.body;
  const Player = new PlayerModel({
    name: name,
    strength: str,
    agility: agi,
    intelligence: int,
    class: charClass,
  });
  try {
    await Player.save();
    res.send(Player);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
