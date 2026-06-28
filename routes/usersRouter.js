import express from "express";
import {verifyRole, verifyToken } from '../middleware/authMiddleware.js';
import { getUsers, getProfile, deleteUser } from "../controllers/userController.js";

const router = express.Router();


router.get("/", verifyToken, verifyRole("admin"), getUsers);
router.get("/profile", verifyToken, getProfile);
router.delete("/:id", verifyToken, verifyRole("admin"), deleteUser);

export default router;