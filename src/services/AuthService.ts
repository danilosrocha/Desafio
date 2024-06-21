import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import * as userService from '../services/UserService';


async function login(email: string, password: string): Promise<string> {
    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            throw new Error("Email/password incorreto!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/password incorreto!");
        }

        const token = sign({
            name: user.name,
            email: user.email
        },
            process.env.JWT_SECRET!,
            {
                subject: user.id.toString(),
                expiresIn: '30d'
            }
        );

        return token;
    } catch (error: any) {
        throw new Error("Erro ao fazer login: " + error.message);
    }
}

export { login };
