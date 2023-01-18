import jwt, { SignOptions } from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

type TypeToken = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
};

const secret = process.env.JWT_SECRET || 'your-secret-token';

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

export const createToken = async (userId: TypeToken) => {
  const token = jwt.sign({ userId }, secret, jwtConfig);
  return token;
};

export const validateToken = async (token: string) => {
  try {
    if (!token) return { error: 'Token not found' };
    const validation = jwt.verify(token, secret);
    if (!jwtConfig.expiresIn) return { error: 'Expired or invalid token' };
    return validation;
  } catch (err) {
    return err;
  }
};