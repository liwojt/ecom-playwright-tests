export interface RegisterUserModel {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhone: string;
  userPassword: string;
}

export interface LoginUserModel {
  userEmail: string;
  userPassword: string;
}
