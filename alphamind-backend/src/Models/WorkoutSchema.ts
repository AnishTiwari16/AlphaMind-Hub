import mongoose from 'mongoose';
import { TWorkout } from '../types';

const workoutSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true,
    }
);

const Workout = mongoose.model<TWorkout>('Workout', workoutSchema);
module.exports = Workout;
