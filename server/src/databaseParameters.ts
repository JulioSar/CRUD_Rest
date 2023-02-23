
import { Pool, PoolClient } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'xxx',
    port: 5432, // default PostgreSQL port
});

export async function connect(): Promise<void> {
    await pool.connect();
    console.log('Connected to PostgreSQL database.');
}
  
export async function release(){
    const client = await pool.connect()
    client.release();
    console.log('Disconnected from PostgreSQL database.');
} 