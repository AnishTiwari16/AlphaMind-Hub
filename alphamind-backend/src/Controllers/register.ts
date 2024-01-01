import { Request, Response, NextFunction } from 'express';
import { createResponse } from '../utils/ResponseUtils';
const User = require('../Models/UserSchema');
export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            name,
            password,
            email,
            weight,
            height,
            gender,
            dob,
            goal,
            activityLevels,
        } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res
                .status(409)
                .json(createResponse(false, 'Email already exists'));
        }
        const newUser = new User({
            name,
            password,
            email,
            weight: [
                {
                    weight: weight,
                    date: Date.now(),
                },
            ],
            height,
            gender,
            dob,
            goal,
            activityLevels,
        });
        await newUser.save();
        res.status(201).json(
            createResponse(true, 'User registered successfully')
        );
    } catch (err) {
        next(err);
    }
};
