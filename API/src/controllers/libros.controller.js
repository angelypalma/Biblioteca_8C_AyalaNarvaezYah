import { pool } from '../db.js';

export const masPrestados = async (_, res) => {
  const result = await pool.query(`
    SELECT l.titulo, COUNT(p.id) AS total
    FROM Libro l
    LEFT JOIN Prestamo p ON l.id = p.libro_id
    GROUP BY l.titulo
    ORDER BY total DESC
  `);
  res.json(result.rows);
};

export const menosPrestados = async (_, res) => {
  const result = await pool.query(`
    SELECT l.titulo, COUNT(p.id) AS total
    FROM Libro l
    LEFT JOIN Prestamo p ON l.id = p.libro_id
    GROUP BY l.titulo
    ORDER BY total ASC
  `);
  res.json(result.rows);
};

export const generoMasVisitado = async (_, res) => {
  const result = await pool.query(`
    SELECT genero, COUNT(*) AS total
    FROM Libro l
    JOIN Prestamo p ON l.id = p.libro_id
    GROUP BY genero
    ORDER BY total DESC
    LIMIT 1
  `);
  res.json(result.rows[0]);
};

export const stock = async (_, res) => {
  const result = await pool.query(`
    SELECT titulo, stock
    FROM Libro
    LIMIT 4
  `);
  res.json(result.rows);
};