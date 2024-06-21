import mongoose, { Schema, Document } from "mongoose";

interface ICompany extends Document {
    companyName: string;
    corporateName: string;
    cnpj: string;
    user: mongoose.Types.ObjectId;
}

const companySchema: Schema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    corporateName: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    { timestamps: true }
)

const company = mongoose.model<ICompany>('Company', companySchema)

export default company

export { ICompany }