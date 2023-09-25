import {config as dotenvConfig} from 'dotenv';

import { ConnectionOptions, createConnection } from 'typeorm';
import app from './app';
import http = require('http'); 
import { Image } from './models/Image';
import { Location } from './models/Location';
import { Report } from './models/Report';
import { parse } from 'pg-connection-string';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenvConfig();

const { host, port, user: username, password, database } = parse(process.env.POSTGRES_URL);

const init = async () => {
  const connectionOptions: PostgresConnectionOptions = {
    type: 'postgres',
    host,
    port: port ? Number(port) : 5432,  // use 5432 as default if port is not provided
    username,
    password,
    database,
    entities: [Image, Location, Report], // add your entities here
    migrations: ['/migrations/**/*.ts'], // add your migrations here
    synchronize: true, // set to false in production
    logging: true,
  };

  const PORT = process.env.PORT || 3000;
  const server = http.createServer(app);

  server.listen(PORT, ()=>{
      console.log(`Server listening on port ${PORT}`);
  });

  server.on('error', (error: any) => {
      console.error('Server error:', error);
  });

  server.on('close', () => {
    console.log('Server is closing');
  });
}

init().catch(err => {
  console.error('Initialization error:', err);
});
