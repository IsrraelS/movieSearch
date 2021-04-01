import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const userRoutes = Router();

userRoutes.get("/read", userController.read)
userRoutes.post("/create", userController.create)
userRoutes.put('/update/:id', userController.update)
userRoutes.delete('/delete/:id', userController.delete)

export default userRoutes;