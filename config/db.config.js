const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/patata-programmer';

mongoose.connect(MONGODB_URI)
.then(() => console.info(`connect to ${MONGODB_URI}`))
.catch((error) => console.error(`ERROR al conectarse a la base de datos Mongo`, error))
