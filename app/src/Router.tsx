import { createBrowserRouter } from 'react-router-dom';

import Home from './app/Home';
import Layout from './design/layout/Layout';
import Login from './app/auth/Login';
import Auth from './design/layout/Auth';
import Dashboard from './app/admin/Dashboard';
import Profile from './app/profile/Profile';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
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
      }
    ]
  },
]);

export default router;
