import express from "express";
import { getUserForSideBar } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router=express.Router();

router.get("/",verifyJWT,getUserForSideBar);


export default router;