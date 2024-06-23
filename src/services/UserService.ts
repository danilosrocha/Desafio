import { IUser } from '../models/User';
import * as userRepository from '../repositories/UserRepository';
import { hash } from 'bcryptjs';

const createUser = async (userData: IUser): Promise<IUser> => {
    try {
        const hashedPassword = await hash(userData.password, 8);

        const userToCreate = { ...userData, password: hashedPassword } as IUser;
        return await userRepository.createUser(userToCreate);
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id: string): Promise<IUser | null> => {
    return await userRepository.getUserById(id);
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return await userRepository.getUserByEmail(email);
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
    getUserByEmail,
    getAllUsers,
    updateUser,
    deleteUser,
};
