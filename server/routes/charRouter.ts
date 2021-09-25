import express from "express";
import charCtrl from "../controllers/charCtrl";

const router = express.Router();

router.get("/all", charCtrl.displayAll);
router.delete("/delete", charCtrl.delete);
router.post("/create", charCtrl.create);
router.put("/update", charCtrl.update);

export default router;
