import { Request, Response } from 'express';
import * as userService from '../services/ProductService';

const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.createProduct(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.getProductById(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await userService.getAllProducts();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.updateProduct(req.params.id, req.body);
        if (!user) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await userService.deleteProduct(req.params.id);
        if (!user) {
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
