import { ResultSetHeader } from 'mysql2';

import { Users } from '../interfaces/users.interfaces';

import connection from './connection';

const createUser = async ({ username, vocation, level, password }: Users): Promise<Users> => {
  const result = await connection.execute<ResultSetHeader & Users>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, username, vocation, level, password };
};

export default {
  createUser,
};