import { Router } from 'express';
import { ordersController } from '../controllers/orders.controller.js';

const ordersRoutes = Router();

ordersRoutes.get("/orderRead/:id", ordersController.orderRead)
ordersRoutes.post("/orderCreate", ordersController.orderCreate)

export default ordersRoutes;