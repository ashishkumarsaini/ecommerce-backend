import dotenv from 'dotenv';

import express from 'express';
import { APPLICATON_PORT, CORS_WHITELIST_ORIGIN } from './constants.js';
import { connectDatabase } from './db/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({ path: './env' });

const app = express();

// middlewares
app.use(cors({
    origin: CORS_WHITELIST_ORIGIN, // should be in env vairables
    credentials: true
}));
app.use(express.json()); // should add limit for accepting JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // to store some files in public folder
app.use(cookieParser());


export const connectApp = () => {
    //TODO: listen to app errors
    app.on('error', () => { });

    app.listen(APPLICATON_PORT, () => {
        console.log(`App running successfully on port ${APPLICATON_PORT}`);
    });
};

connectDatabase().then(() => {
    connectApp();
}).catch((err) => {
    console.log('SOMETHING WENT WRONG WHILE CONNECTING', err);
});
