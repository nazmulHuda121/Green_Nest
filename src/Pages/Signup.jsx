import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { Link, useNavigate } from 'react-router';

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    if (!/(?=.*[A-Z])/.test(password))
      return setError('Must include one uppercase letter.');
    if (!/(?=.*[a-z])/.test(password))
      return setError('Must include one lowercase letter.');
    if (password.length < 6)
      return setError('Password must be at least 6 characters.');

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        toast.success('Signup successful!');
        navigate('/');
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Signup failed!');
      });
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 relative overflow-hidden">
        {/* background shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-72 h-72 bg-green-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* main content */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-2xl p-8 relative z-10">
          <h2 className="text-gray-700 text-center text-2xl font-semibold pb-5">
            Register your account
          </h2>
          <hr className="border-gray-300" />

          <form onSubmit={handleSignup} className="card-body">
            <fieldset className="fieldset space-y-1">
              <label className="label text-gray-700">Your Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
                required
              />

              <label className="label text-gray-700">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Photo URL"
                required
              />

              <label className="label text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Email"
                required
              />

              <label className="label text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered bg-white/70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Password"
                required
              />

              <div>
                <a className="link link-hover text-sm text-green-600">
                  Forgot password?
                </a>
              </div>

              <button className="btn mt-4 bg-green-500 hover:bg-green-600 text-white w-full">
                Register
              </button>
            </fieldset>
          </form>
          {error && (
            <p className="text-red-500 text-center text-sm mt-2">{error}</p>
          )}

          <p className="text-center text-[14px] text-gray-700 mt-4">
            Already Have An Account?{' '}
            <Link
              to="/auth/login"
              className="text-green-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
