import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { TAdmin } from '../types';
const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Enter admin name'],
        },
        email: {
            type: String,
            required: [true, 'Enter admin email id'],
        },
        password: {
            type: String,
            required: [true, 'Please enter admin password'],
        },
    },
    { timestamps: true }
);
adminSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
const Admin = mongoose.model<TAdmin>('Admin', adminSchema);
module.exports = Admin;
