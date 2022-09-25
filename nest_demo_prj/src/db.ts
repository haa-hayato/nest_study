import { Pool } from 'pg';

export const pgPool = new Pool({
    port: 5432,
    host: '172.24.0.3',
    user: 'postgres',
    password: 'password',
    database: 'postgres',


})