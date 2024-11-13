import express from "express";
import { addTeam } from "../controllers/team.controller.js";
import upload from "../middlewares/upload.middleware.js";


const router = express.Router();

router.post('/add-team',upload.single('image'),addTeam)

export default router;