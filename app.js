const mongoose = require('mongoose');
require('dotenv').config();
const logger = require ('morgan')

const express = require('express');
const app = express();

app.set('views engine', 'hbs');
app.set('views', `${__dirname}/views`)

app.use(logger('dev'));

const routes = require('./config/routes.config');
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error de conexión a MongoDB'));
db.once('open', () => {
    console.log('Se ha conectado a MongoDB Atlas');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('¡ESTO FUNCIONA!'));