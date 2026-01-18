import { pool } from '../db.js';

export const deudas5a10 = async (req, res) => {
  const result = await pool.query(`
    SELECT u.nombre, CURRENT_DATE - p.fecha_inicio AS dias_deuda
    FROM Prestamo p
    JOIN Usuarios u ON p.usuario_id = u.id
    WHERE p.devuelto = false
    AND CURRENT_DATE - p.fecha_inicio BETWEEN 35 AND 70
  `);
  res.json(result.rows);
};

export const deudasMas10 = async (req, res) => {
  const result = await pool.query(`
    SELECT u.nombre, CURRENT_DATE - p.fecha_inicio AS dias_deuda
    FROM Prestamo p
    JOIN Usuarios u ON p.usuario_id = u.id
    WHERE p.devuelto = false
    AND CURRENT_DATE - p.fecha_inicio > 70
  `);
  res.json(result.rows);
};