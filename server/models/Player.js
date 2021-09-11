const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  agility: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
});

const Player = mongoose.model("players", PlayerSchema);

module.exports = Player;
