export type TUser = {
    name: string;
    password: string;
    email: string;
    weight: [{ weight: number; date: Date }];
    height: number;
    gender: 'Male' | 'Female';
    dob: Date;
    goal: string;
    caloriesIntake: [
        {
            item: string;
            date: Date;
            quantity: number;
            quantityType: string;
            caloriesIntake: number;
        }
    ];
    activityLevels: number;
    sleep: [{ date: Date; DurationInHrs: number }];
    steps: [{ date: Date; stepsCount: number }];
    updatedAt: Date;
    createdAt: Date;
};
export type TAdmin = {
    name: string;
    password: string;
    email: string;
    updatedAt: Date;
    createdAt: Date;
};
export type TWorkout = {
    name: string;
    description: string;
    durationInMinutes: number;
    exercises: [
        {
            name: string;
            description: string;
            sets: number;
            reps: number;
            imageURL: string;
        }
    ];
    imageURL: string;
    createdAt: Date;
    updatedAt: Date;
};
