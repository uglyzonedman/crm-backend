import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);

  return hash;
};
