//we will connect the DB
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is not defined');
}
mongoose
    .connect(process.env.MONGO_URL, {
        dbName: process.env.DB_NAME,
    })
    .then(() => console.log('Connected to Database'))
    .catch((err: string) => console.log('Error connecting to databse' + err));
