import mongoose from 'mongoose';
import { USER_MODEL_ID } from '../constants';

const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ['Customer', 'Admin', 'Super-Admin'],
        default: 'Customer',
    },
},
    { timestamps: true }
);

export const User = mongoose.model(USER_MODEL_ID, userModel);
