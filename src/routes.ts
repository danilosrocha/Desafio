import { Router, Request, Response } from "express";
import * as loginController from './controllers/AuthController';
import * as userController from './controllers/UserController';
import * as companyController from './controllers/CompanyController'
import * as customerController from './controllers/CustomerController'
import * as productController from './controllers/ProductController'
import * as orderController from './controllers/OrderController'
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.json({ ok: true })
})
// auth
router.post('/login', loginController.login);

// user
router.post('/users', userController.createUser);
router.get('/users/:id', isAuthenticated, userController.getUserById);
router.get('/users', isAuthenticated, userController.getAllUsers);
router.put('/users/:id', isAuthenticated, userController.updateUser);
router.delete('/users/:id', isAuthenticated, userController.deleteUser);

// company
router.post('/companies', isAuthenticated, companyController.createCompany);
router.get('/companies/:id', isAuthenticated, companyController.getCompanyById);
router.get('/companies', isAuthenticated, companyController.getAllCompanies);
router.put('/companies/:id', isAuthenticated, companyController.updateCompany);
router.delete('/companies/:id', isAuthenticated, companyController.deleteCompany);

// customer
router.post('/customers', isAuthenticated, customerController.createCustomer);
router.get('/customers/:id', isAuthenticated, customerController.getCustomerById);
router.get('/customers', isAuthenticated, customerController.getAllCustomers);
router.put('/customers/:id', isAuthenticated, customerController.updateCustomer);
router.delete('/customers/:id', isAuthenticated, customerController.deleteCustomer);

// product
router.post('/products', isAuthenticated, productController.createProduct);
router.get('/products/:id', isAuthenticated, productController.getProductById);
router.get('/products', isAuthenticated, productController.getAllProducts);
router.put('/products/:id', isAuthenticated, productController.updateProduct);
router.delete('/products/:id', isAuthenticated, productController.deleteProduct);

// order
router.post('/orders', isAuthenticated, orderController.createOrder);
router.get('/orders/:id', isAuthenticated, orderController.getOrderById);
router.get('/orders', isAuthenticated, orderController.getAllOrders);
router.put('/orders/:id', isAuthenticated, orderController.updateOrder);
router.delete('/orders/:id', isAuthenticated, orderController.deleteOrder);

export { router }