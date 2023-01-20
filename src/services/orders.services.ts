import modelOrders from '../models/orders.models';
import { Orders } from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<Orders[]> => {
  const result = await modelOrders.getAllOrders();
  if (!result) return [];
  return result;
};

const createOrder = async (order: Orders) => {
  const affectedRows = await modelOrders.createOrder(order);
  if (affectedRows < 1) return { type: 'error', message: 'Cannot insert Orders' };
  return { type: null, message: order };
};

export default {
  getAllOrders,
  createOrder,
};