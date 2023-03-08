import { Navigate, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard/profile' />;
  }
  return (
    <div>
      <nav>
        <Link to='/'>HomeLogo</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>SignUp</Link>
      </nav>
      <Outlet />
    </div>
  );
};
