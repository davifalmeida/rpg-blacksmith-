import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/products.interface';
import connection from './connection';

const createProduct = async ({ name, amount }: Product): Promise<Product> => {
  const result = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount };
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await connection.execute<RowDataPacket[] & Product[]>(
    'SELECT * FROM Trybesmith.products',
  );
  const [data] = result;
  return data;
};

export default {
  createProduct,
  getAllProducts,
};