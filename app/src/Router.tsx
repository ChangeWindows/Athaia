import { createBrowserRouter } from 'react-router-dom';

import Home from './app/Home';
import Layout from './design/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default router;
