import { RowDataPacket } from 'mysql2';

import connection from './connection';

const login = async (username: string, password: string) => {
  const [[rows]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  return rows;
};

export default {
  login,
};