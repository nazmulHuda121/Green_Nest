import { createBrowserRouter } from 'react-router';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';

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
      {
        path: '/login',
        Component: <Login />,
      },
    ],
  },
]);

export default router;
