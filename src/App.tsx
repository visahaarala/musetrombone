import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Info from './pages/Info';
import Mizu from './pages/Mizu';
import Error from './pages/Error';
import RootLayout from './pages/RootLayout';
import ApiTest from './pages/ApiTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // fix this so that in japan it wil redirect to /jp
      // { index: true, loader: async () => redirect('/en') },
      { index: true, element: <Home lang={'en'} /> },
      { path: 'en', element: <Home lang={'en'} /> },
      { path: 'jp', element: <Home lang={'jp'} /> },
      { path: 'info', element: <Info /> },
      { path: 'mizu', element: <Mizu /> },
      { path: 'apitest', element: <ApiTest /> },
      { path: '*', loader: async () => redirect('/') },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
