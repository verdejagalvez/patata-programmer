require('dotenv').config();
require('./config/db.config');

const favicon = require ('serve-favicon');
const logger = require('morgan');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(path.join(__dirname, 'public', 'potatoFavicon.ico')));

app.set('view engine', 'hbs');
app.set('views',`${__dirname}/views`);

app.use(logger('dev'));

const router = require('./config/routes.config');
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('¡ESTO FUNCIONA!'));