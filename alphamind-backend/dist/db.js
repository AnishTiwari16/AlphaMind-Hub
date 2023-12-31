"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//we will connect the DB
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is not defined');
}
mongoose_1.default
    .connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
})
    .then(() => console.log('Connected to Database'))
    .catch((err) => console.log('Error connecting to databse' + err));
