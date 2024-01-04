import { NextFunction, Request, Response } from 'express';
import { createResponse } from '../utils/ResponseUtils';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
const User = require('../Models/UserSchema');
export const loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        //we will get username and password
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            //user is not there in db
            return res
                .status(400)
                .json(createResponse(false, 'Invalid credentials'));
        }
        //user is there now we will match the password entered
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res
                .status(400)
                .json(createResponse(false, 'Invalid credentials'));
        }
        const authToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            {
                expires: '50m',
            }
        );
        const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expires: '100m' }
        );
        //we are sending cookies to FE and setting on BE
        res.cookie('authToken', authToken, { httpOnly: true });
        res.cookie('refreshToken', refreshToken, { httpOnly: true });
        res.status(200).json(
            createResponse(true, 'Login successfull', {
                authToken,
                refreshToken,
            })
        );
    } catch (err) {
        next(err);
    }
};
