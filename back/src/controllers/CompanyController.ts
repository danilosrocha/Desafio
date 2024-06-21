import { Request, Response } from 'express';
import * as companyService from '../services/CompanyService';

const createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.createCompany(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getCompanyById = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.getCompanyById(req.params.id);
        if (!company) {
            res.status(404).json({ message: 'Company not found' });
            return;
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
        const companys = await companyService.getAllCompanies();
        res.status(200).json(companys);
    } catch (error) {
        console.error('Error fetching all companys:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.updateCompany(req.params.id, req.body);
        if (!company) {
            res.status(404).json({ message: 'Company not found' });
            return;
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.deleteCompany(req.params.id);
        if (!company) {
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
