import { Router } from 'express';
import { createGames, listGames } from '../controllers/gamesController.js';

const gamesRoutes = Router();

gamesRoutes.post("/games", createGames);
gamesRoutes.get("/games", listGames);

export default gamesRoutes;