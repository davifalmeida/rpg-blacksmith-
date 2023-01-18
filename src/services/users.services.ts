import { Users } from '../interfaces/users.interfaces';
import usersModel from '../models/users.models';
import { createToken } from '../auth/validateToken';

const createUser = async (item: Users): Promise<string> => {
  const result = await usersModel.createUser(item);
  const token = createToken(result);
  return token;
};

export default {
  createUser,
};