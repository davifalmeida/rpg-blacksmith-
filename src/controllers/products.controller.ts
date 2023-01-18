import { Request, Response } from 'express';
import productsServices from '../services/products.services';

const createProducts = async (req: Request, res: Response) => {
  const getResult = req.body;
  const result = await productsServices.createProducts(getResult);
  res.status(201).json(result);
};
  
export default {
  createProducts,
};