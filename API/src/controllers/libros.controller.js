import { pool } from '../../db.js';
//CONSULTAS DE A LA BASE DE DATOS
export const masPrestados = async (_, res) => {
  try {
    const result = await pool.query(`
      SELECT l.titulo, COUNT(p.id) AS total
      FROM libro l
      LEFT JOIN prestamo p ON l.id = p.libro_id
      GROUP BY l.titulo
      ORDER BY total DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const menosPrestados = async (_, res) => {
  try {
    const result = await pool.query(`
      SELECT l.titulo, COUNT(p.id) AS total
      FROM libro l
      LEFT JOIN prestamo p ON l.id = p.libro_id
      GROUP BY l.titulo
      ORDER BY total ASC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const generoMasVisitado = async (_, res) => {
  try {
    const result = await pool.query(`
      SELECT l.genero, COUNT(*) AS total
      FROM libro l
      JOIN prestamo p ON l.id = p.libro_id
      GROUP BY l.genero
      ORDER BY total DESC
      LIMIT 1
    `);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const stock = async (_, res) => {
  try {
    const result = await pool.query(`
      SELECT titulo, stock
      FROM libro
      LIMIT 4
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};