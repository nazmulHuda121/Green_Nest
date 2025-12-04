import React from 'react';
import { Link, NavLink } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthContext';
import { toast } from 'react-toastify';

const NavBar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast('Logged out successfully'))
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'
          }
        >
          All Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive
              ? 'text-green-600 font-semibold'
              : 'text-gray-700 hover:text-green-600'
          }
        >
          Support
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? 'text-green-600 font-semibold'
                : 'text-gray-700 hover:text-green-600'
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="bg-[#f1efec] backdrop-blur-xl shadow-sm border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="w-32" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-[17px] font-medium">
          {navLinks}
        </ul>

        {/* Right side buttons */}
        <div className="hidden lg:flex">
          {user ? (
            <button
              onClick={handleLogOut}
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost p-0">
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 p-4 shadow-lg bg-white rounded-lg w-60 border"
          >
            {navLinks}

            <hr className="my-2" />

            {user ? (
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-green-600 text-white rounded-md mt-2 w-full text-center"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="px-4 py-2 bg-green-600 text-white rounded-md mt-2 w-full text-center"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
