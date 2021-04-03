import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.get("/title/:title", movieController.title)
movieRoutes.get("/id/:id", movieController.id)
movieRoutes.get('/all', movieController.all)


export default movieRoutes;