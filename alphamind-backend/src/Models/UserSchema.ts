import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { TUser } from '../types';
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter name'],
        },
        password: {
            type: String,
            required: [true, 'Please enter password'],
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email already exists'],
        },
        weight: [
            {
                weight: {
                    type: Number,
                    required: [true, 'Enter your weight'],
                },
                date: {
                    tpye: Date,
                    required: [true, 'Please enter the date'],
                },
            },
        ],
        height: {
            type: Number,
            required: [true, 'Please enter your height'],
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            required: [true, 'Provide your gender'],
        },
        dob: {
            type: Date,
            required: [true, 'Please enter your date of birth'],
        },
        goal: {
            type: String,
            required: [true, 'Enter your desired goal'],
        },
        caloriesIntake: [
            {
                item: {
                    type: String,
                    required: [true, 'Please mention item name'],
                },
                date: {
                    type: Date,
                    required: [true, 'Please mention time of intake'],
                },
                quantity: {
                    type: Number,
                    required: [true, 'Please mention how many quantity'],
                },
                quantityType: {
                    type: String,
                    requried: [true, 'Enter quantity type'],
                },
                caloriesIntake: {
                    type: Number,
                    required: [true, 'Enter total calories amount'],
                },
            },
        ],
        activityLevels: {
            type: String,
            required: [true, 'Please provide your activity level'],
        },
        sleep: [
            {
                date: {
                    type: Date,
                    required: [true, 'Please provide the date'],
                },
                DurationInHrs: {
                    type: Number,
                    required: [true, 'Sleep duration in Hrs'],
                },
            },
        ],
        steps: [
            {
                date: {
                    type: Date,
                    required: [true, 'Please provide date'],
                },
                stepsCount: {
                    type: Number,
                    required: [true, 'Please enter your total steps count'],
                },
            },
        ],
    },
    { timestamps: true }
);
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
const User = mongoose.model<TUser>('User', userSchema);
module.exports = User;
