import mongoose, { Schema, Document } from "mongoose";

interface ICustomer extends Document {
    name: string
    email: string
    telephone: string,
    company: mongoose.Types.ObjectId
}

const clientSchema: Schema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    telephone: {
        type: String,
        require: true,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    }
})

const client = mongoose.model<ICustomer>('Customer', clientSchema)

export default client

export { ICustomer }