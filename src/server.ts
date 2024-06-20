import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import connectToMongoDB from './db/conn';

const port = 3000

async function startServer() {
    connectToMongoDB().then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });
}

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api", router)

startServer();