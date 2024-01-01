"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const workoutSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Enter workout name'],
    },
    description: {
        type: String,
        required: [true, 'Enter workout description'],
    },
    durationInMinutes: {
        type: Number,
        required: [true, 'Enter workout duration in Mins'],
    },
    exercises: [
        {
            name: {
                type: String,
                required: [true, 'Enter excersise name'],
            },
            description: {
                type: String,
                required: [true, 'Enter excersise description'],
            },
            sets: {
                type: Number,
                required: [true, 'Enter excersise sets count'],
            },
            reps: {
                type: Number,
                required: [true, 'Enter excersise reps'],
            },
            imageURL: {
                type: String,
                required: [true, 'Enter excersise image URL'],
            },
        },
    ],
    imageURL: {
        type: String,
        required: [true, 'Enter excersise image URL'],
    },
}, {
    timestamps: true,
});
const Workout = mongoose_1.default.model('Workout', workoutSchema);
module.exports = Workout;
