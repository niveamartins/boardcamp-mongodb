import { Router } from 'express';
import { createCategories } from "../controllers/categoriesController"

const categoriesRoutes = Router();

categoriesRoutes.post("/categories", createCategories);

export default categoriesRoutes;