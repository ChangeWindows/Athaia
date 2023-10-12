import { createBrowserRouter } from 'react-router-dom';

import Home from './app/Home';
import Admin from './design/layout/Admin';
import Login from './app/auth/Login';
import Auth from './design/layout/Auth';
import Dashboard from './app/admin/Dashboard';
import Profile from './app/profile/Profile';
import ForgotPassword from './app/auth/ForgotPassword';
import Register from './app/auth/Register';
import VerifyEmail from './app/auth/VerifyEmail';
import Frontend from './design/layout/Frontend';
import ResetPassword from './app/auth/ResetPassword';

const router = createBrowserRouter([
  {
    element: <Frontend />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },
  {
    element: <Admin />,
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    element: <Auth />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/verify-email',
        element: <VerifyEmail />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/reset-password/:token',
        element: <ResetPassword />
      }
    ]
  },
]);

export default router;
