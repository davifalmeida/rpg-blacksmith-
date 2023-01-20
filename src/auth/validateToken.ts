import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { Users } from '../interfaces/users.interfaces';

dotenv.config();

const secret = process.env.JWT_SECRET || 'your-secret-token';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = (userId: Users) => {
  const token = jwt.sign({ data: userId }, secret, jwtConfig);
  return token;
};

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const decoded = jwt.verify(token, secret);
    req.body.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};