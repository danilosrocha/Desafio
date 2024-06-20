import mongoose, { Schema, Document } from "mongoose";

interface IClient extends Document {
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

const client = mongoose.model<IClient>('Client', clientSchema)

export default client

export { IClient }