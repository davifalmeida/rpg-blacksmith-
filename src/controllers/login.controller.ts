import { Request, Response } from 'express';
import loginService from '../services/login.services';

const login = async (req: Request, res: Response) => {
  const item = req.body;
  const { type, message } = await loginService.login(item);
  if (type) {
    return res.status(401).json({ message });
  }
  return res.status(200).json({ token: message });
};

export default {
  login,
};