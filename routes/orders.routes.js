import { Router } from 'express';
import { ordersController } from '../controllers/orders.controller.js';

const ordersRoutes = Router();

ordersRoutes.get("/orderRead", ordersController.orderRead)
ordersRoutes.post("/orderCreate", ordersController.orderCreate)

export default ordersRoutes;