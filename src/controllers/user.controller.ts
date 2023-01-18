import { Request, Response } from 'express';
import usersServices from '../services/users.services';

const createUser = async (req: Request, res: Response) => {
  const itens = req.body;
  const result = await usersServices.createUser(itens);
  return res.status(201).json({ token: result });
};

export default {
  createUser,
};