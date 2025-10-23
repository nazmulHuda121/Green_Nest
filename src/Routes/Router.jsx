import { createBrowserRouter } from 'react-router';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';
import AuthLayOut from '../LayOuts/AuthLayOut';
import Register from '../Pages/Register';
import PlantDetails from '../Pages/PlantDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <Home> </Home>,
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: true,
      },
      {
        path: '/plants',
        element: <Plants></Plants>,
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: true,
      },
      {
        path: '/plant-details/:id',
        element: <PlantDetails></PlantDetails>,
        loader: () => fetch('/plants.json'),
      },

      {
        path: '/profile',
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayOut />,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },
  {
    path: '/*',
    element: <h2>Error404</h2>,
  },
]);

export default router;
