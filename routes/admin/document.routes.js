import express from "express"
import { createDocument, getDocumentByType } from "../../controllers/document.controller.js"
// import verifyJwtToken from "../../middlewares/verifyJwtToken"


const router =express.Router()

// router.use(verifyJwtToken)
router.get("/",getDocumentByType)
router.post("/create-document",createDocument)

export default router