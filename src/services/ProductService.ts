import { IProduct } from '../models/Product';
import * as userRepository from '../repositories/ProductRepository';

const createProduct = async (userData: IProduct): Promise<IProduct> => {
    return await userRepository.createProduct(userData);
};

const getProductById = async (id: string): Promise<IProduct | null> => {
    return await userRepository.getProductById(id);
};

const getAllProducts = async (userId: string): Promise<IProduct[]> => {
    return await userRepository.getAllProducts(userId);
};

const updateProduct = async (id: string, updateData: Partial<IProduct>): Promise<IProduct | null> => {
    return await userRepository.updateProduct(id, updateData);
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
    return await userRepository.deleteProduct(id);
};

export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
