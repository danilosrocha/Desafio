import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    companies: mongoose.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
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
    companies: [{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }]
},
    { timestamps: true }
);

const user = mongoose.model<IUser>('User', userSchema);

export default user;

export { IUser };
