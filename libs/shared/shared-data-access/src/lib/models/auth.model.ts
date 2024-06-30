export interface AuthDialogOptions {
  process: 'signUp' | 'signIn';
}

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  groups: {id: number, name: string}[];
}

