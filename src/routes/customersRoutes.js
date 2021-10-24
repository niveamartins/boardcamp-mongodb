import { Router } from 'express';
import { createCustomers, listCustomers } from '../controllers/customersController.js';

const customersRoutes = Router();

customersRoutes.post("/customers", createCustomers);
customersRoutes.get("/customers", listCustomers);
customersRoutes.get("/customers/:id", listCustomers);

export default customersRoutes;