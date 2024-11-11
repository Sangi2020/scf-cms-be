import express from "express";
import { register } from "../controllers/auth.controller.js";



const router = express.Router();



//auth routes
router.post("/register",register )
router.post("/login", )
router.post("/change-password", )
router.post("/reset-password", )


export default router;