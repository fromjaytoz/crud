const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PlayerModel = require("./models/Player");
const Player = require("./models/Player");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://OC:12345@crud.wmgom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.get("/", async (req, res) => {
  Player.find({}, (err, request) => {
    res.send(request);
  });
});

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

app.get("/test", async (req, res) => {
  Player.find({ class: "Warrior" }, (err, result) => {
    if (err) {
    }
    res.send(result);
  });
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
