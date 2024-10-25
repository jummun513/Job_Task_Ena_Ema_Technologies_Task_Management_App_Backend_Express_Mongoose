import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_uri: process.env.DB_URI,
  client_url_local: process.env.CLIENT_URL_LOCAL,
  client_url_production: process.env.CLIENT_URL_PRODUCTION,
};
