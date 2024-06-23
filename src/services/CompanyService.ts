import { ICompany } from '../models/Company';
import * as userRepository from '../repositories/CompanyRepository';

const createCompany = async (userData: ICompany): Promise<ICompany> => {
    return await userRepository.createCompany(userData);
};

const getCompanyById = async (id: string, userId: string): Promise<ICompany | null> => {
    return await userRepository.getCompanyById(id, userId);
};

const getAllCompanies = async (userId: string): Promise<ICompany[]> => {
    return await userRepository.getAllCompanies(userId);
};

const updateCompany = async (id: string, updateData: Partial<ICompany>): Promise<ICompany | null> => {
    return await userRepository.updateCompany(id, updateData);
};

const deleteCompany = async (id: string): Promise<ICompany | null> => {
    return await userRepository.deleteCompany(id);
};

export {
    createCompany,
    getCompanyById,
    getAllCompanies,
    updateCompany,
    deleteCompany,
};
