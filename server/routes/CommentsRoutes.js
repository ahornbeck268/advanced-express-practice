import express from "express";
import {list,show,create,update,remove} from "../controllers/CommentsController";
const router = express.Router();

router.get("/comments", list);
router.get("/comments/:id", show);
router.post("/comments", create);
router.put("/comments/:id", update);
router.delete("/comments/:id", remove);

export default router;
