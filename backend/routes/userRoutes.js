import express from "express";
import {
  registerUser,
  authUser,
  allUsers,
} from "../controllers/userControllers.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(authenticate, allUsers);
router.post("/login", authUser);

export default router;
