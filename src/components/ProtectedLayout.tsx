import { Navigate, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

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
