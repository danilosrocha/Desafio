import { Request, Response } from 'express';
import * as customerService from '../services/CustomerService';

const createCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getCustomerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error fetching all customers:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await customerService.updateCustomer(req.params.id, req.body);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
            return;
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await customerService.deleteCustomer(req.params.id);
        if (!customer) {
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
