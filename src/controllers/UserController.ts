import { Request, Response } from 'express';
import * as userService from '../services/UserService';

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
};
