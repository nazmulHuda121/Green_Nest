import { use } from 'react';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  // Show loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-green-400 text-xl">
        Loading...
      </div>
    );
  }

  // If no user -> redirect to login
  if (!user) {
    toast.info('Please login to continue');
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
