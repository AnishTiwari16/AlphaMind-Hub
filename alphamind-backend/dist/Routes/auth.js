"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = __importDefault(require("../Middlewares/errorMiddleware"));
const register_1 = require("../Controllers/register");
const login_1 = require("../Controllers/login");
const app = (0, express_1.default)();
const router = express_1.default.Router();
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.COMPANY_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
    },
});
//creating a user
app.post('/register', register_1.createUser);
app.post('/login', login_1.loginUser);
//if there is error in code then errorHandler middleware will be called
app.use(errorMiddleware_1.default);
module.exports = router;
