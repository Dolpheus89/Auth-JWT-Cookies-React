import * as UserControllers from "../controllers/UserControllers.js";
import express from "express";

const router = express.Router();

router.get("/protected", UserControllers.protectedRoute);

router.post("/register", UserControllers.register);
router.post("/login", UserControllers.login);
router.post("/logout", UserControllers.logout);

export default router;
