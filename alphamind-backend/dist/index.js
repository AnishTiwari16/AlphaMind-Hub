"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
require('./db');
const PORT = 8000;
const allowedOrigins = ['https://localhost:3000']; //add more origins as needed
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Blocked by CORS'));
        }
    },
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.listen(PORT, () => {
    console.log('Server running on port' + ' ' + PORT);
});
