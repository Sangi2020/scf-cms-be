import express from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "../../controllers/user.controller.js";
import  { verifyRole } from "../../middlewares/verifyJwtToken.js";
import verifyJwtToken from "../../middlewares/verifyJwtToken.js";



const router = express.Router();




router.post("/create", verifyJwtToken, verifyRole('superadmin'), createUser);
router.get("/view", verifyJwtToken, verifyRole('superadmin'), getAllUsers);
router.put("/update/:id", verifyJwtToken, verifyRole('superadmin'), updateUser);
router.delete("/delete/:id", verifyJwtToken, verifyRole('superadmin'), deleteUser);


export default router;