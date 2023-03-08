import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './components/HomeLayout';
import { ProtectedLayout } from './components/ProtectedLayout';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { ProfilePage } from './pages/Profile';
import { SettingsPage } from './pages/Settings';
import { SignUpPage } from './pages/SignUp';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />
      </Route>
      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='settings' element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;