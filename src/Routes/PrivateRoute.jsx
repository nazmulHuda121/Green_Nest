import { use } from 'react';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  // Show loading
  if (loading) {
    return <Loading />;
  }

  // If no user -> redirect to login
  if (!user) {
    toast.info('Please login to continue');
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
