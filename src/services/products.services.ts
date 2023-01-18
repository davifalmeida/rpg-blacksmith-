import { Product } from '../interfaces/products.interface';
import productsModel from '../models/products.models';

const createProducts = async (item: Product): Promise<Product> => {
  const result = await productsModel.createProduct(item);
  return result;
};

export default {
  createProducts,
};