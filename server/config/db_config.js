import mongoose from 'mongoose'
import log4js from 'log4js';
import { DB_ACCESS } from '../constants/variables.js'

const log = log4js.getLogger();
log.level = 'all';

mongoose.connect(DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('error', console.error.bind(console, 'connection error'))
mongoose.connection.once('open', () => log.info('Database connected'))