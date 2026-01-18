import { Router } from 'express';
import {
  paisPredominante,
  librosPorAutor
} from '../controllers/autores.controller.js';

const router = Router();

router.get('/pais-predominante', paisPredominante);
router.get('/libros', librosPorAutor);

export default router;