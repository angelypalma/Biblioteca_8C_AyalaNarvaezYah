import express from 'express';
import cors from 'cors';

import prestamosRoutes from './src/routes/prestamos.routes.js';
import librosRoutes from './src/routes/libros.routes.js';
import usuariosRoutes from './src/routes/usuarios.routes.js';
import autoresRoutes from './src/routes/autores.routes.js';

const app = express();

app.use(cors()); // ✅ CORS agregado
app.use(express.json());

app.use('/prestamos', prestamosRoutes);
app.use('/libros', librosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/autores', autoresRoutes);

app.listen(3000, () => {
  console.log('API corriendo en puerto 3000');
});

//CUEBTA 