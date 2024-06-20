import mongoose, { Schema, Document } from "mongoose";

interface IOrder extends Document {
    number: number
    observation: string,
    date: Date
    products: {
        product: mongoose.Types.ObjectId;
        quantity: number;
    }[];
    customer: mongoose.Types.ObjectId
    company: mongoose.Types.ObjectId

}

const orderSchema: Schema = new Schema({
    number: {
        type: Number,
        require: true
    },
    observation: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        require: true,
        default: Date.now
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    Customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
})

const order = mongoose.model<IOrder>('Order', orderSchema)

export default order

export { IOrder }