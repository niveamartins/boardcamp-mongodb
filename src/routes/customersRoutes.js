import { Router } from 'express';
import { createCustomers, listCustomers, updateCustomers } from '../controllers/customersController.js';

const customersRoutes = Router();

customersRoutes.post("/customers", createCustomers);
customersRoutes.get("/customers", listCustomers);
customersRoutes.get("/customers/:id", listCustomers);
customersRoutes.put("/customers/:id", updateCustomers);

export default customersRoutes;