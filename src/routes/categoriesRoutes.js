import { Router } from 'express';
import { createCategories, listCategories } from "../controllers/categoriesController.js"

const categoriesRoutes = Router();

categoriesRoutes.post("/categories", createCategories);
categoriesRoutes.get("/categories", listCategories);

export default categoriesRoutes;