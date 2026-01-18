import express from 'express';
import prestamosRoutes from './routes/prestamos.routes.js';
import librosRoutes from './routes/libros.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import autoresRoutes from './routes/autores.routes.js';

const app = express();
app.use(express.json());

app.use('/prestamos', prestamosRoutes);
app.use('/libros', librosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/autores', autoresRoutes);

app.listen(3000, () => {
  console.log('API corriendo en puerto 3000');
});