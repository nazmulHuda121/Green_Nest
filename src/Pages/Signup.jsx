// src/Pages/Signup.jsx
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
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input input-bordered w-full"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Register
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-center text-sm mt-2">{error}</p>
        )}

        <p className="text-center mt-3 text-sm">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
