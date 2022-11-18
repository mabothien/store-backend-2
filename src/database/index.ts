import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  POSTGRES_PORT,
  ENV,
} = process.env;

let client = new Pool();
if (ENV === 'dev') {
  console.log('dev-dev');
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: String(POSTGRES_PASSWORD),
    port: Number(POSTGRES_PORT),
  });
}
if (ENV === 'test') {
  console.log('test-test');
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: String(POSTGRES_PASSWORD),
    port: Number(POSTGRES_PORT),
  });
}
export default client;
