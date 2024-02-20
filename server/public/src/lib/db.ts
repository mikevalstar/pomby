import env from '@env';
import { Client } from 'pg';

const client = new Client({
  connectionString: env.DATABASE_URL,
});
client.connect();

export default client;
