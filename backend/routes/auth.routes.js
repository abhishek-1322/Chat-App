import {Router} from "express";
import { loginUser, logoutUser, signupUser } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
console.log("inside router auth")
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout",verifyJWT, logoutUser);


export default router;