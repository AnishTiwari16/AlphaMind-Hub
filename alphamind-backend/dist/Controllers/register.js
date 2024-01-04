"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const ResponseUtils_1 = require("../utils/ResponseUtils");
const User = require('../Models/UserSchema');
const createUser = async (req, res, next) => {
    try {
        const { name, password, email, weight, height, gender, dob, goal, activityLevels, } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(409)
                .json((0, ResponseUtils_1.createResponse)(false, 'Email already exists'));
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
        res.status(201).json((0, ResponseUtils_1.createResponse)(true, 'User registered successfully'));
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
