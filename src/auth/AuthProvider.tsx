import { createContext, useMemo, ReactNode, useContext } from 'react';
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

/* Provider가 내려보낸 value를 하위 children에서 사용할 수 있게 함 */
export const useAuth = () => useContext(AuthContext);
