import User, { IUser } from '../models/User';

const createUser = async (userData: IUser): Promise<IUser> => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email: email }).exec();
};


const getAllUsers = async (): Promise<IUser[]> => {
    return await User.find();
};

const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id);
};

export {
    createUser,
    getUserById,
    getUserByEmail,
    getAllUsers,
    updateUser,
    deleteUser,
};
