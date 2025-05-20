import { LoginUserModel } from '../models/user.model';

export const userTestData: LoginUserModel = {
  userEmail: process.env.USER_EMAIL || '[NOT SET]',
  userPassword: process.env.USER_PASSWORD || '[NOT SET]',
};
