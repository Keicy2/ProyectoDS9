import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import { cartController } from "../controllers/cart.Controller.js";

export const cartRoutes = Router();

cartRoutes.post("/addCart/:id", auth, cartController.addCart);

cartRoutes.post("/deleteCart/:id", auth, cartController.deleteCart);

cartRoutes.patch("/updateCart", auth, cartController.updateCart);

cartRoutes.get("/getCart", auth, cartController.getCart);
