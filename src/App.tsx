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
    /* loader에서 반환되는 데이터로 SSR처럼 데이터를 미리 내려보낼 수 있음 */
    /* 로그인이 됐는지 안 됐는지를 페이지 렌더링 전 미리 판단 */
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })} // defer를 붙이면 실행 후 아래 children 렌더링 (await 기능)
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
