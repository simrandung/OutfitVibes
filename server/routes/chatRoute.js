import express from "express";
import { chatCompletion } from "../controllers/chatController.js";
const router = express.Router();
router.post("/", chatCompletion);
export default router;
