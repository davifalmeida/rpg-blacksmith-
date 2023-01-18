import modelOrders from '../models/orders.models';
import { Orders } from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<Orders[]> => {
  const result = await modelOrders.getAllOrders();
  if (!result) return [];
  return result;
};

export default {
  getAllOrders,
};