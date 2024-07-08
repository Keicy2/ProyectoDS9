import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import { payController } from "../controllers/pay.controller.js";

export const payRoutes = Router();

payRoutes.post("/createOrder", auth, payController.payCreate);

payRoutes.get("/captureOrder", auth, payController.payCapture);

//payRoutes.get("/captureOrder", auth, (req, res)=>{res.send("prueba")});

payRoutes.get("/cancelOrder", auth, payController.payCancel);
