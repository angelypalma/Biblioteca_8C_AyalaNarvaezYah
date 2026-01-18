import { Router } from 'express';
import { topUsuarioSemestre } from '../controllers/usuarios.controller.js';

const router = Router();
router.get('/top/:semestre', topUsuarioSemestre);
export default router;