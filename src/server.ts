import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";
import { connectToMongoDB } from './mongodb';

const port = 3333

const app = express()

app.use(express.json())

app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {


    if (err instanceof Error) {
        return res.status(400).json({ error: err.message })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error."
    })
})

async function startServer() {
    try {
        const client = await connectToMongoDB();

        app.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Erro ao iniciar o servidor:', err);
    }
}

startServer();