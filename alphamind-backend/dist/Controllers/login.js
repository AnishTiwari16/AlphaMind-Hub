"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const ResponseUtils_1 = require("../utils/ResponseUtils");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = require('jsonwebtoken');
const User = require('../Models/UserSchema');
const loginUser = async (req, res, next) => {
    try {
        //we will get username and password
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            //user is not there in db
            return res
                .status(400)
                .json((0, ResponseUtils_1.createResponse)(false, 'Invalid credentials'));
        }
        //user is there now we will match the password entered
        const isMatched = await bcrypt_1.default.compare(password, user.password);
        if (!isMatched) {
            return res
                .status(400)
                .json((0, ResponseUtils_1.createResponse)(false, 'Invalid credentials'));
        }
        const authToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expires: '50m',
        });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expires: '100m' });
        //we are sending cookies to FE and setting on BE
        res.cookie('authToken', authToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.status(200).json((0, ResponseUtils_1.createResponse)(true, 'Login successfull', {
            authToken,
            refreshToken,
        }));
    }
    catch (err) {
        next(err);
    }
};
exports.loginUser = loginUser;
