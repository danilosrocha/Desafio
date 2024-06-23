import Company, { ICompany } from '../models/Company';

const createCompany = async (userData: ICompany): Promise<ICompany> => {
    const user = new Company(userData);
    return await user.save();
};

const getCompanyById = async (id: string, userId: string): Promise<ICompany | null> => {
    const company = await Company.findById(id)

    if (company && company.user.toString() === userId) {
        return company;
    }

    return null
};

const getAllCompanies = async (userId: string): Promise<ICompany[]> => {
    try {
        const companies = await Company.find({ user: userId }).exec();

        return companies;
    } catch (error) {
        throw new Error(`Failed to fetch companies: ${error}`);
    }
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
