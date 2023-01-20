import { Request, Response } from 'express';
import servicesOrders from '../services/orders.services';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const result = await servicesOrders.getAllOrders();
  if (!result) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds, user: { data: { id: userId } } } = req.body;
  const { type, message } = await servicesOrders.createOrder({ userId, productsIds });
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message);
};

export default {
  getAllOrders,
  createOrder,
};