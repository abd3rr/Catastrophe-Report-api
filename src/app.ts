import './config/container';
import bodyParser = require('body-parser');
import cors = require('cors');
import express = require('express');
import routes from './routes/routes';
import "reflect-metadata";

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Defining routes  
app.use('/api', routes);

export default app;
