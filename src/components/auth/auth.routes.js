import { Router } from "express";
import controller from "./auth.controller.js";

const router = Router();

router.post("/signup", controller.signUp);
router.post("/signin", controller.signIn);

export default router;
