import { Router } from "express";
import { userController } from "../controllers/auth.controller.js";
import { auth } from "../middleware/auth.middleware.js";

export const authRoutes = Router();

authRoutes.post("/register", userController.register);
authRoutes.post("/login", userController.login);
authRoutes.post("/logout", userController.logout);
authRoutes.get("/profile",auth, userController.getUser);
authRoutes.patch("/update",auth, userController.updateUser);
