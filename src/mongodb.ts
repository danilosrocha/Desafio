
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://rochasolutionsbarber:Uz6dSF83WIB5mSJt@cluster0.zdftbni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    async function run() {
        try {
            await client.connect();

            await client.db("admin").command({ ping: 1 });

            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
            await client.close();
        }
    }

    run().catch(console.dir);
}

export { connectToMongoDB }

