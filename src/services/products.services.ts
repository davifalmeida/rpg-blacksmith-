import { Product } from '../interfaces/products.interface';
import productsModel from '../models/products.models';

const createProducts = async (item: Product): Promise<Product> => {
  const result = await productsModel.createProduct(item);
  return result;
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await productsModel.getAllProducts();
  return result;
};

export default {
  createProducts,
  getAllProducts,
};