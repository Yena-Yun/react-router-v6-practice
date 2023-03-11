import { User } from './user';

export interface AuthContextValue {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

export interface LoginResponse {
  message: string;
  token: string;
}
