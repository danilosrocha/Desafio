import mongoose, { Schema } from 'mongoose';

interface IUser {
    name: string;
    email: string;
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
},
    { timestamps: true }
);

const user = mongoose.model<IUser>('User', userSchema);

export default user;

export { IUser };
