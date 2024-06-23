import Company, { ICompany } from '../models/Company';
import Customer, { ICustomer } from '../models/Customer';

const createCustomer = async (userData: ICustomer): Promise<ICustomer> => {
    return await userData.save();
};

const getCustomerById = async (id: string): Promise<ICustomer | null> => {
    return await Customer.findById(id);
};

const getAllCustomers = async (userId: string): Promise<ICustomer[]> => {
    try {
        const companies = await Company.find({ user: userId }).exec();

        const companyIds = companies.map(company => company._id);

        const customers = await Customer.find({ company: { $in: companyIds } }).populate('company').exec();

        return customers;
    } catch (error) {
        throw new Error(`Failed to fetch customers: ${error}`);
    }
};

const updateCustomer = async (id: string, updateData: Partial<ICustomer>): Promise<ICustomer | null> => {
    return await Customer.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteCustomer = async (id: string): Promise<ICustomer | null> => {
    return await Customer.findByIdAndDelete(id);
};

export {
    createCustomer,
    getCustomerById,
    getAllCustomers,
    updateCustomer,
    deleteCustomer,
};
