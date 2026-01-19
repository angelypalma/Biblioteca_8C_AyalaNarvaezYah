import { pool } from '../../db.js';

export const paisPredominante = async (_, res) => {
  const result = await pool.query(`
    SELECT nacionalidad, COUNT(*) AS total
    FROM Autor
    GROUP BY nacionalidad
    ORDER BY total DESC
    LIMIT 1
  `);
  res.json(result.rows[0]);
};

export const librosPorAutor = async (_, res) => {
  const result = await pool.query(`
    SELECT a.nombre, COUNT(l.id) AS total_libros
    FROM Autor a
    LEFT JOIN Libro l ON a.id = l.autor_id
    GROUP BY a.nombre
    ORDER BY total_libros DESC
  `);
  res.json(result.rows);
};