import mysql from 'mysql2/promise';
import { attachDatabasePool } from '@vercel/functions';

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

attachDatabasePool(pool);

export default pool;