"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PlayerSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("players", PlayerSchema);
//# sourceMappingURL=Player.js.map