import { Router, Request, Response } from "express";
import * as userController from './controllers/UserController';
import * as companyController from './controllers/CompanyController'
import * as customerController from './controllers/CustomerController'

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

// company
router.post('/companies', companyController.createCompany);
router.get('/companies/:id', companyController.getCompanyById);
router.get('/companies', companyController.getAllCompanies);
router.put('/companies/:id', companyController.updateCompany);
router.delete('/companies/:id', companyController.deleteCompany);

// customer
router.post('/customers', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.get('/customers', customerController.getAllCustomers);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

export { router }