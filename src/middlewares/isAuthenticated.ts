import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: 'Token inválido.' });
    }

    const [, token] = authToken.split(' ');

    try {
        verify(token, process.env.JWT_SECRET || '') as Payload;

        return next();
    } catch (err) {
        if (err) {
            return res.status(401).json({ error: 'Token JWT inválido.' });
        }
    }
}
