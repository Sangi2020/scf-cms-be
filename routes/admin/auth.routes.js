import express from "express";
import { changePassword, forgotPassword, login, resetPassword,  verifyOtp  } from "../../controllers/auth.controller.js";
import  { verifyRole } from "../../middlewares/verifyJwtToken.js";
import verifyJwtToken from "../../middlewares/verifyJwtToken.js";



const router = express.Router();



//auth routes
router.post("/login",login)
router.post("/change-password",verifyJwtToken,changePassword)
router.post("/forgot-password",forgotPassword)
router.post('/verify-otp',verifyOtp)
router.post('/reset-password',resetPassword)


export default router;