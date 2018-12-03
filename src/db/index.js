import dotenv from 'dotenv';
import { Pool } from 'pg';
import DbContext from './DbContext';

dotenv.config();
const { DATABASE_URL } = process.env;

const pool = new Pool({ connectionString: DATABASE_URL });
const dbContext = new DbContext(pool);
export default dbContext;
