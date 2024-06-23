import mongoose, { Schema, Document } from "mongoose";

interface IOrder extends Document {
    number: number
    observation: string,
    date: Date
    conclude: boolean
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
        require: true,
        unique: true
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
    conclude: {
        type: Boolean,
        default: false
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
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
})

interface ISequence extends Document {
    _id: string;
    sequence_value: number;
}

const SequenceSchema: Schema = new Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 0 }
});

const Sequence = mongoose.model<ISequence>('Sequence', SequenceSchema);

orderSchema.pre<IOrder>('save', async function (next) {
    if (!this.number) {
        try {
            const sequence = await Sequence.findByIdAndUpdate(
                { _id: 'orderId' },
                { $inc: { sequence_value: 1 } },
                { new: true, upsert: true }
            );
            this.number = sequence.sequence_value;
            next();
        } catch (err) {
            next();
        }
    } else {
        next();
    }
});

const order = mongoose.model<IOrder>('Order', orderSchema)

export default order

export { IOrder }