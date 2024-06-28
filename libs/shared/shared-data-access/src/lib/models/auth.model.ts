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

