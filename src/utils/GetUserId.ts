import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const getUserIdFromToken = (req: Request): string | null => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        return null;
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token) {
        return null;
    }

    try {
        const decodedToken: any = jwt.verify(token, `${process.env.JWT_SECRET}`);
        if (decodedToken && decodedToken.sub) {
            return decodedToken.sub;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

export default getUserIdFromToken