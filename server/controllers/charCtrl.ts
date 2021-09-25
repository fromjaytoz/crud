import { Request, Response } from "express";
import Player from "../models/Player";

const charCtrl = {
  displayAll: async (req: Request, res: Response) => {
    try {
      Player.find({}, (err, result) => {
        res.send(result);
      });
    } catch (err) {
      res.send(err);
    }
  },
  delete: async (req: Request, res: Response) => {
    const id = req.body.id;
    console.log(id);
    await Player.findByIdAndRemove(id).exec();
    await res.send(`${id} deleted!`);
  },
  create: async (req, res) => {
    const { name, str, agi, int, charClass } = req.body;
    const player = new Player({
      name: name,
      strength: str,
      agility: agi,
      intelligence: int,
      charClass: charClass,
    });
    try {
      await player.save();
      res.send(player);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },
  update: async (req: Request, res: Response) => {
    const { name, strength, agility, intelligence, charClass } = req.body;
    const id = req.body._id;
    console.log(id);
    try {
      await Player.findById(id, (err, matchedChar) => {
        matchedChar.name = name;
        matchedChar.strength = strength;
        matchedChar.agility = agility;
        matchedChar.intelligence = intelligence;
        matchedChar.charClass = charClass;
        matchedChar.save();
        console.log(matchedChar);
        console.log("Update Success!");
      });
    } catch (err) {
      console.log(err);
    }
    await res.send(`${id} updated!`);
  },
};

export default charCtrl;
