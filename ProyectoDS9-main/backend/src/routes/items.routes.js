import { Router } from "express";
import { itemsController } from "../controllers/items.controller.js";
import { auth } from "../middleware/auth.middleware.js";

export const itemsRoutes = Router();

itemsRoutes.get("/items", itemsController.getAllItems);

itemsRoutes.get("/item/:id", itemsController.getItem);

itemsRoutes.post("/createItems", auth, itemsController.createItem);

itemsRoutes.delete("/deleteItems/:id",auth, itemsController.deleteItem);

itemsRoutes.patch("/updateItems/:id",auth, itemsController.updateItem);
