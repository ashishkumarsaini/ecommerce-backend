import mongoose from "mongoose";
import { DATABASE_URI, DATABASE_NAME } from "./constants.js";

export const connectDatabase = async () => {
    try {
        const databaseInstance = await mongoose.connect(`${DATABASE_URI}/${DATABASE_NAME}`);
        console.log('DATABASE CONNECTED!!! DB HOST: ', databaseInstance.connection.host);
    } catch (error) {
        console.log('DATABASE CONNECTION ERROR: ', error);
        process.exit();
    }
};
