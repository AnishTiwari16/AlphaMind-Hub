export interface IUser extends Document {
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
}
