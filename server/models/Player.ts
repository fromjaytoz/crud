import mongoose from "mongoose";

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
  charClass: {
    type: String,
    required: true,
  },
});

export default mongoose.model("players", PlayerSchema);
