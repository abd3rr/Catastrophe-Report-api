import { createConnection } from 'typeorm';
import app from './app';
import http = require('http'); 
import { Image } from './models/Image';
import { Location } from './models/Location';
import { Report } from './models/Report';
import * as dotenv from 'dotenv';
import { Severity } from './models/Severity';
import { EventType } from './models/EventType';

dotenv.config({ path: '../.env' });



const init = async () => {
  await createConnection({
    type: process.env.DB_TYPE! as any,  
    url: process.env.DB_URL,
    entities: [Image, Location, Report,Severity,EventType],
    migrations: ['/migrations/**/*.ts'],
    synchronize: true, // true for development, false for production
    logging: true,
});

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