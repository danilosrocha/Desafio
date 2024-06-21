import { IUser } from '../models/User';
import * as userRepository from '../repositories/UserRepository';

const createUser = async (userData: IUser): Promise<IUser> => {
    return await userRepository.createUser(userData);
};

const getUserById = async (id: string): Promise<IUser | null> => {
    return await userRepository.getUserById(id);
};

const getAllUsers = async (): Promise<IUser[]> => {
    return await userRepository.getAllUsers();
};

const updateUser = async (id: string, updateData: Partial<IUser>): Promise<IUser | null> => {
    return await userRepository.updateUser(id, updateData);
};

const deleteUser = async (id: string): Promise<IUser | null> => {
    return await userRepository.deleteUser(id);
};

export {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
};
