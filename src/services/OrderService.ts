import { IOrder } from '../models/Order';
import * as orderRepository from '../repositories/OrderRepository';

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
    return await orderRepository.createOrder(orderData);
};

const getOrderById = async (id: string): Promise<IOrder | null> => {
    return await orderRepository.getOrderById(id);
};

const getAllOrders = async (): Promise<IOrder[]> => {
    return await orderRepository.getAllOrders();
};

const updateOrder = async (id: string, updateData: Partial<IOrder>): Promise<IOrder | null> => {
    return await orderRepository.updateOrder(id, updateData);
};

const deleteOrder = async (id: string): Promise<IOrder | null> => {
    return await orderRepository.deleteOrder(id);
};

const concludeOrder = async (id: string): Promise<IOrder | null> => {
    const updateData: Partial<IOrder> = {
        conclude: true
    };

    return await orderRepository.updateOrder(id, updateData);;
};

export {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    deleteOrder,
    concludeOrder
};
