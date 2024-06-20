import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
    name: string
    description: string,
    price: number
    company: mongoose.Types.ObjectId
}

const productSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
})

const product = mongoose.model<IProduct>('Product', productSchema)

export default product

export { IProduct }