require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConnect');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, '/public')));

const rootRouter = require('./routes/root');
app.use('/', rootRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json( {message: '404 Not Found'} );
    } else {
        res.type('txt').send('404 Not Found');
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
        console.log(`Port ${PORT} Connected`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});