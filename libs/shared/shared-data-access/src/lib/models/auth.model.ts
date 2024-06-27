export interface AuthDialogOptions {
  process: 'signUp' | 'signIn' | 'test' | 'register';
}

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

