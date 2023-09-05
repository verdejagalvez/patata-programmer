require('dotenv').config();
require('./config/db.config');
require('./config/hbs.config');

const logger = require('morgan');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'hbs');
app.set('views',`${__dirname}/views`);

app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));

const sessionConfig = require('./config/session.config')
app.use(sessionConfig.session)
app.use(sessionConfig.loadSessionUser)

const router = require('./config/routes.config');
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('¡ESTO FUNCIONA!'));