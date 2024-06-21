import Order, { IOrder } from '../models/Order';

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
    const order = new Order(orderData);
    return await order.save();
};

const getOrderById = async (id: string): Promise<IOrder | null> => {
    return await Order.findById(id);
};

const getAllOrders = async (): Promise<IOrder[]> => {
    try {
        const orders = await Order.find().populate('company').exec();
        return orders;
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        throw error;
    }
};

const updateOrder = async (id: string, updateData: Partial<IOrder>): Promise<IOrder | null> => {
    return await Order.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOrder = async (id: string): Promise<IOrder | null> => {
    return await Order.findByIdAndDelete(id);
};

export {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    deleteOrder,
};
