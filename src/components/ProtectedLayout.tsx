import { Navigate, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

/* 로그인 이후에만 접근 가능한 페이지 */
export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <nav>
        <Link to='/profile'>Profile</Link>
        <Link to='/settings'>Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};
