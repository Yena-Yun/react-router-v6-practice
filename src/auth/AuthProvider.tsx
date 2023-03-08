import { createContext, useContext, useMemo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import { User } from '../types/user';

const defaultValue: {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
} = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = async (data: User) => {
    setUser(data);
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    (): {
      user: User | null;
      login: (data: User) => void;
      logout: () => void;
    } => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
