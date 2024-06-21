import Company, { ICompany } from '../models/Company';

const createCompany = async (userData: ICompany): Promise<ICompany> => {
    const user = new Company(userData);
    return await user.save();
};

const getCompanyById = async (id: string): Promise<ICompany | null> => {
    return await Company.findById(id);
};

const getAllCompanies = async (): Promise<ICompany[]> => {
    return await Company.find();
};

const updateCompany = async (id: string, updateData: Partial<ICompany>): Promise<ICompany | null> => {
    return await Company.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteCompany = async (id: string): Promise<ICompany | null> => {
    return await Company.findByIdAndDelete(id);
};

export {
    createCompany,
    getCompanyById,
    getAllCompanies,
    updateCompany,
    deleteCompany,
};
