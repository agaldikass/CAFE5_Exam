
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/PageLayout';

const HomePage = lazy(() => import('./pages/HomePage'));




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        
      ],
    },
  ]);

  
  return (

    <div>
        <RouterProvider router={router} />
    </div>

   );
  }

export default App;
