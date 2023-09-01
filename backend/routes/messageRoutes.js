import express from "express";
import { allMessages, sendMessage } from "../controllers/messageControllers.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/:chatId").get(authenticate, allMessages);
router.route("/").post(authenticate, sendMessage);

export default router;
