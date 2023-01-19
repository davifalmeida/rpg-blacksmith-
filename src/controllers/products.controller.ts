import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const createProducts = async (req: Request, res: Response) => {
  const getResult = req.body;
  const result = await productsServices.createProducts(getResult);
  res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productsServices.getAllProducts();
  if (result.length === 0) {
    return res.status(404).json({ message: 'Products not found' });
  }
  res.status(200).json(result);
};
  
export default {
  createProducts,
  getAllProducts,
};