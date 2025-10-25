import { use, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, googleLogin, sendPassResetEmailFunc } = use(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Login failed! Check your credentials.');
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success('Logged in with Google!');
        navigate(from, { replace: true });
      })
      .catch(() => toast.error('Google login failed.'));
  };
  const emailRef = useRef(null);

  // Forgate Password
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef?.current && emailRef?.current.value.trim();
    console.log(email);
    if (!email) {
      toast.error('Please enter your email first!');
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        toast.success('Password reset email sent! Check your Gmail inbox.');
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-green-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* main content */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-2xl p-8 relative z-10">
        <h2 className="text-gray-700 text-center text-2xl font-semibold pb-5">
          Login to Your Account
        </h2>
        <hr className="border-gray-300 " />

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset space-y-1">
            <label className="label text-gray-700">Email</label>
            <input
              name="email"
              ref={emailRef}
              type="email"
              className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
              placeholder="Enter your email"
              required
            />

            <label className="label text-gray-700">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 cursor-pointer text-gray-500 hover:text-gray-700 z-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="text-right">
              <button
                onClick={handleForgetPassword}
                type="button"
                className="underline cursor-pointer text-sm text-green-600 hover:text-green-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="btn mt-1 bg-green-500 hover:bg-green-600 text-white w-full"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gray-300"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>

            <button
              onClick={handleGoogle}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-700 px-5 py-2 rounded-lg w-full font-semibold border border-gray-200 hover:bg-gray-100 transition cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </fieldset>
        </form>
        {error && (
          <p className="text-red-500 text-center text-sm mt-2">{error}</p>
        )}

        <p className="text-center text-[14px] text-gray-700">
          Don’t have an account?{' '}
          <Link
            to="/auth/signup"
            className="text-green-700 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
