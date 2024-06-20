import { Request, Response } from 'express';
import * as userService from '../services/CompanyService';

const createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.createCompany(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getCompanyById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.getCompanyById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Company not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllCompanies();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateCompany(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ message: 'Company not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.deleteCompany(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Company not found' });
            return;
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    createCompany,
    getCompanyById,
    getAllCompanies,
    updateCompany,
    deleteCompany,
};
