import { Request, Response } from 'express';
import * as authService from '../services/AuthService';

const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = await authService.login(email, password);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    login,
};
