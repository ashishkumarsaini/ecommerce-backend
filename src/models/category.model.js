import mongoose from 'mongoose';
import { CATEGORY_MODEL_ID } from '../constants';

const categoryModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Category = mongoose.model(CATEGORY_MODEL_ID, categoryModel);
