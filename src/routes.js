import { Router } from 'express';
import { createCategories } from './controllers/categoriesController';

const routes = Router();

routes.post("/categories", createCategories)


export default routes;