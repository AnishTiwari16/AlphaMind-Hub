import nodemailer from 'nodemailer';
import express from 'express';
import errorHandler from '../Middlewares/errorMiddleware';
import { createUser } from '../Controllers/register';
const app = express();
const router = express.Router();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.COMPANY_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
    },
});
//creating a user
app.post('/register', createUser);
//if there is error in code then errorHandler middleware will be called
app.use(errorHandler);
module.exports = router;
