import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: 'dpg-d5mit0mr433s7387h3j0-a',
  user: 'biblioteca_8c_ayalanarvaezyah_user',
  password: 'MSLHsHWcZfBCF2hXf03rPdFRntLuDBV2',
  database: 'biblioteca_8c_ayalanarvaezyah',
  port: 5432
});
