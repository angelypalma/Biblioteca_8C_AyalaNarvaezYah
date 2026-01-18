import { Router } from 'express';
import {
  deudas5a10,
  deudasMas10
} from '../controllers/prestamos.controller.js';

const router = Router();

router.get('/deudas/5-10', deudas5a10);
router.get('/deudas/mas-10', deudasMas10);

export default router;