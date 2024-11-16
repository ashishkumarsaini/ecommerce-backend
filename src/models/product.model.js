import mongoose from 'mongoose';
import { CATEGORY_MODEL_ID, PRODUCT_MODEL_ID } from '../constants';

const productModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CATEGORY_MODEL_ID,
    },
},
    { timestamps: true, }
);

export const Product = mongoose.model(PRODUCT_MODEL_ID, productModel);
