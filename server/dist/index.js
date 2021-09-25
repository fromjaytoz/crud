"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const charRouter_1 = __importDefault(require("./routes/charRouter"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: __dirname + "/.env" });
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Routes
app.use("/character", charRouter_1.default);
//Database
require("./config/database");
app.post("/");
app.put("/updateChar");
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
//# sourceMappingURL=index.js.map