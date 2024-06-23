import company from '../models/Company';
import Product, { IProduct } from '../models/Product';

const createProduct = async (userData: IProduct): Promise<IProduct> => {
    const user = new Product(userData);
    return await user.save();
};

const getProductById = async (id: string): Promise<IProduct | null> => {
    return await Product.findById(id);
};

const getAllProducts = async (userId: string): Promise<IProduct[]> => {
    const companies = await company.find({ user: userId }).exec();

    const companyIds = companies.map(company => company._id);

    const products = await Product.find({ company: { $in: companyIds } }).populate('company').exec();

    return products;
};

const updateProduct = async (id: string, updateData: Partial<IProduct>): Promise<IProduct | null> => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
    return await Product.findByIdAndDelete(id);
};

export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
