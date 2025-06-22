import * as bcrypt from 'bcrypt';

export const checkPassword = (plain: string, hash: string) =>
  bcrypt.compare(plain, hash);
