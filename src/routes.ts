import { Router, Request, Response } from "express";
import * as userController from '../src/controllers/userController';

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ ok: true })
})

// user
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export { router }