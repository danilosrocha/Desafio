import { Request, Response } from 'express';
import * as orderService from '../services/OrderService';
import getUserIdFromToken from '../utils/GetUserId';

const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = getUserIdFromToken(req) || ""

        if (!userId) {
            res.status(500).json({ error: "error" });
        }

        const orders = await orderService.getAllOrders(userId);
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching all orders:', error);
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unexpected error occurred' });
    }
};

const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await orderService.deleteOrder(req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const concludeOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = await orderService.concludeOrder(req.params.id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json({ message: 'Order finalize successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    deleteOrder,
    concludeOrder
};
