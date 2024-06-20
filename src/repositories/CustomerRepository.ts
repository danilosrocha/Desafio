import Customer, { ICustomer } from '../models/Customer';

const createCustomer = async (userData: ICustomer): Promise<ICustomer> => {
    const user = new Customer(userData);
    return await user.save();
};

const getCustomerById = async (id: string): Promise<ICustomer | null> => {
    return await Customer.findById(id);
};

const getAllCustomers = async (): Promise<ICustomer[]> => {
    return await Customer.find();
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
