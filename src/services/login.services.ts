import dotenv from 'dotenv';
import { createToken } from '../auth/validateToken';

import { Users } from '../interfaces/users.interfaces';
import loginModel from '../models/login.models';

dotenv.config();

const login = async ({ username, password }: Users) => {
  const result = await loginModel.login(username, password || '');
  if (!result) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  if (result.username !== username || result.password !== password) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  const token = createToken(result as Users);
  return { type: null, message: token };
};

export default {
  login,
};
