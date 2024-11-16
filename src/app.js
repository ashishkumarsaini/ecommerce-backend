import dotenv from 'dotenv';

import express from 'express';
import { APPLICATON_PORT } from './index.js';
import { connectDatabase } from './db/index.js';

dotenv.config({ path: './env' });
const app = express();

const connectApp = () => {
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
