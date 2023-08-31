require('dotenv').config();
require('./config/db.config');

const logger = require('morgan')

const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(logger('dev'));

const router = require('./config/routes.config');
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('¡ESTO FUNCIONA!'));