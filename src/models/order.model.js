import mongoose from 'mongoose';
import { ORDER_MODEL_ID, PRODUCT_MODEL_ID, USER_MODEL_ID } from '../constants';

const orderProductModel = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: PRODUCT_MODEL_ID,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderModel = new mongoose.Schema(
    {
        products: [orderProductModel], // we can also write this as {type: [orderProductModel]}
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: USER_MODEL_ID,
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model(ORDER_MODEL_ID, orderModel);
