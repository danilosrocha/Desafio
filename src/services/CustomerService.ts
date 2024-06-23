import { ICustomer } from '../models/Customer';
import * as userRepository from '../repositories/CustomerRepository';

const createCustomer = async (userData: ICustomer): Promise<ICustomer> => {
    return await userRepository.createCustomer(userData);
};

const getCustomerById = async (id: string): Promise<ICustomer | null> => {
    return await userRepository.getCustomerById(id);
};

const getAllCustomers = async (): Promise<ICustomer[]> => {
    return await userRepository.getAllCustomers();
};

const updateCustomer = async (id: string, updateData: Partial<ICustomer>): Promise<ICustomer | null> => {
    return await userRepository.updateCustomer(id, updateData);
};

const deleteCustomer = async (id: string): Promise<ICustomer | null> => {
    return await userRepository.deleteCustomer(id);
};

export {
    createCustomer,
    getCustomerById,
    getAllCustomers,
    updateCustomer,
    deleteCustomer,
};
