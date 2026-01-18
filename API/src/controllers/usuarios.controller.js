import { pool } from '../db.js';

export const topUsuarioSemestre = async (req, res) => {
  const { semestre } = req.params;

  const result = await pool.query(`
    SELECT u.nombre, COUNT(*) AS total
    FROM Prestamo p
    JOIN Usuarios u ON p.usuario_id = u.id
    WHERE u.semestre = $1
    GROUP BY u.nombre
    ORDER BY total DESC
    LIMIT 1
  `, [semestre]);

  res.json(result.rows[0]);
};