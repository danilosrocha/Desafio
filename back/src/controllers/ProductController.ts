import { Request, Response } from 'express';
import * as companyService from '../services/ProductService';

const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.createProduct(req.body);
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.getProductById(req.params.id);
        if (!company) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const companys = await companyService.getAllProducts();
        res.status(200).json(companys);
    } catch (error) {
        console.error('Error fetching all companys:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.updateProduct(req.params.id, req.body);
        if (!company) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await companyService.deleteProduct(req.params.id);
        if (!company) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
