"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../models/Player"));
const charCtrl = {
    displayAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            Player_1.default.find({}, (err, result) => {
                res.send(result);
            });
        }
        catch (err) {
            res.send(err);
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.body.id;
        console.log(id);
        yield Player_1.default.findByIdAndRemove(id).exec();
        yield res.send(`${id} deleted!`);
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, str, agi, int, charClass } = req.body;
        const player = new Player_1.default({
            name: name,
            strength: str,
            agility: agi,
            intelligence: int,
            charClass: charClass,
        });
        try {
            yield player.save();
            res.send(player);
        }
        catch (err) {
            console.log(err);
            res.send(err);
        }
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, strength, agility, intelligence, charClass } = req.body;
        const id = req.body._id;
        console.log(id);
        try {
            yield Player_1.default.findById(id, (err, matchedChar) => {
                matchedChar.name = name;
                matchedChar.strength = strength;
                matchedChar.agility = agility;
                matchedChar.intelligence = intelligence;
                matchedChar.charClass = charClass;
                matchedChar.save();
                console.log(matchedChar);
                console.log("Update Success!");
            });
        }
        catch (err) {
            console.log(err);
        }
        yield res.send(`${id} updated!`);
    }),
};
exports.default = charCtrl;
//# sourceMappingURL=charCtrl.js.map