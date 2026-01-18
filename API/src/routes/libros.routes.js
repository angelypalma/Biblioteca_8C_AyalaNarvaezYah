import { Router } from 'express';
import {
  masPrestados,
  menosPrestados,
  generoMasVisitado,
  stock
} from '../controllers/libros.controller.js';

const router = Router();

router.get('/mas-prestados', masPrestados);
router.get('/menos-prestados', menosPrestados);
router.get('/genero-mas-visitado', generoMasVisitado);
router.get('/stock', stock);

export default router;