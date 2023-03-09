import { createContext, useMemo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import { User } from '../types/user';
import { AuthContextValue } from '../types/auth';

const defaultValue: AuthContextValue = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthProvider = ({
  children,
  userData,
}: {
  children: ReactNode;
  userData: any;
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user', userData);

  const login = async (data: User) => {
    setUser(data);
    navigate('/dashboard/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    (): AuthContextValue => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
