import express from "express";
import { createTask, getAllTasks } from "../controllers/task";

const router = express.Router();

router.post("/task", createTask);

router.get("/task", getAllTasks);

export default router;
