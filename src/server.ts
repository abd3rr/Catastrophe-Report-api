import { createConnection } from 'typeorm';
import app from './app';
import http = require('http'); 
import { Image } from './models/Image';
import { Location } from './models/Location';
import { Report } from './models/Report';

const init = async () => {
  await createConnection({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'123456',
    database:'cataReportsDB',
    entities:[  Image, Location, Report],
    migrations: [  '/migrations/**/*.ts'],
    synchronize:true, // true for development, false for production
    logging:true,
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
