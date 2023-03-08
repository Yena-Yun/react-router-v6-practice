import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  defer,
} from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import { HomeLayout } from './components/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
import { getUserData } from './hooks/getUserData';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Settings';
import { SignUpPage } from './pages/SignUp';
import './styles.css';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<SignUpPage />} />
      </Route>
      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
