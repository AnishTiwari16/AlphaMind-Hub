"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
adminSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt_1.default.hash(user.password, 8);
    }
    next();
});
const Admin = mongoose_1.default.model('Admin', adminSchema);
module.exports = Admin;
