import mongoose from "mongoose";

async function connectToMongoDB() {
    try {
        mongoose.set("strictQuery", true)

        const uri = process.env.URI || ""

        await mongoose.connect(uri)

    } catch (error) {
        console.log(error);
    }
}

export default connectToMongoDB