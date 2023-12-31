import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
require('./db');
const PORT = 8000;
const allowedOrigins = ['https://localhost:3000']; //add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Blocked by CORS'));
            }
        },
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.listen(PORT, () => {
    console.log('Server running on port' + ' ' + PORT);
});
