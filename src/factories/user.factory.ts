import { RegisterUserModel } from '../models/user.model';

export function generateRandomUserData(): RegisterUserModel {
  const randomString = (length: number): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  };

  const randomNumber = (length: number): string => {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  };

  return {
    userFirstName: randomString(5),
    userLastName: randomString(5),
    userEmail: `${randomString(5)}@example.com`,
    userPhone: `+1${randomNumber(10)}`,
    userPassword: randomString(8),
  };
}
