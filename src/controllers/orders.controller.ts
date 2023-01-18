import { Request, Response } from 'express';
import servicesOrders from '../services/orders.services';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const result = await servicesOrders.getAllOrders();
  if (!result) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(result);
};

export default {
  getAllOrders,
};