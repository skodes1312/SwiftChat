import express from "express";
import authenticate from "../middleware/authMiddleware.js";
import {
  accessChat,
  addUser,
  createGroupChat,
  loadChats,
  removeUser,
  renameGroup,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.route("/").post(authenticate, accessChat).get(authenticate, loadChats);
router.route("/group").post(authenticate, createGroupChat);
router.route("/rename").put(authenticate, renameGroup);
router.route("/groupadd").put(authenticate, addUser);
router.route("/groupremove").put(authenticate, removeUser);

export default router;
