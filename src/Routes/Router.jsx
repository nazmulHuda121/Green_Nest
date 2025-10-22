import { createBrowserRouter } from 'react-router';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';
import AuthLayOut from '../LayOuts/AuthLayOut';
import Register from '../Pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <Home> </Home>,
      },
      {
        path: '/plants',
        element: <Plants></Plants>,
        loader: () => fetch('/data.json'),
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
]);

export default router;
