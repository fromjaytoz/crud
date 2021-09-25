"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const charCtrl_1 = __importDefault(require("../controllers/charCtrl"));
const router = express_1.default.Router();
router.get("/all", charCtrl_1.default.displayAll);
router.delete("/delete", charCtrl_1.default.delete);
router.post("/create", charCtrl_1.default.create);
router.put("/update", charCtrl_1.default.update);
exports.default = router;
//# sourceMappingURL=charRouter.js.map