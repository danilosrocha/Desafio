import mongoose from "mongoose";

async function connectToMongoDB() {
    try {
        mongoose.set("strictQuery", true)

        const uri = "mongodb+srv://rochasolutionsbarber:Uz6dSF83WIB5mSJt@cluster0.zdftbni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(uri)

    } catch (error) {
        console.log(error);
    }
}

export default connectToMongoDB