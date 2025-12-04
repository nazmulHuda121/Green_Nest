import { createBrowserRouter } from 'react-router';
import MainLayOut from '../LayOuts/MainLayOut';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import MyProfile from '../Pages/MyProfile';
import Login from '../Pages/Login';
import AuthLayOut from '../LayOuts/AuthLayOut';
import PlantDetails from '../Pages/PlantDetails';
import PrivateRoute from './PrivateRoute';
import Signup from '../Pages/Signup';
import Loading from '../Pages/Loading';
import AboutUs from '../Pages/AboutUs';
import NotFound from '../Components/HomeComponents/NotFound';
import SupportPage from '../Pages/SupportPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        index: true,
        element: <Home> </Home>,
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/plants',
        element: <Plants></Plants>,
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/plant-details/:id',
        element: <PlantDetails />,
        loader: () => fetch('/plants.json'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '/about',
        Component: AboutUs,
      },
      {
        path: '/support',
        element: <SupportPage />,
      },

      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
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
        path: '/auth/signup',
        Component: Signup,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export default router;
