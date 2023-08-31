const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/patata-programmer';

mongoose.connect(MONGODB_URI)
.then(() => console.info(`¡Se ha conectado a la base de datos Mongo!`))
.catch((error) => console.error(`ERROR al conectarse a la base de datos Mongo`, error))
