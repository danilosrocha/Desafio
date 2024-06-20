import { Request, Response } from 'express';
import * as userService from '../services/CustomerService';

const createCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.createCustomer(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getCustomerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.getCustomerById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllCustomers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateCustomer(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.deleteCustomer(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    createCustomer,
    getCustomerById,
    getAllCustomers,
    updateCustomer,
    deleteCustomer,
};
