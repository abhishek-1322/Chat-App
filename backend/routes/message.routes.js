import {Router} from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/:id",verifyJWT,getMessages)
router.post("/sendMessage/:id",verifyJWT,sendMessage)

export default router;