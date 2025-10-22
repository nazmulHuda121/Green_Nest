import { Link, NavLink } from 'react-router';

const NavBar = () => {
  const links = (
    <>
      <li className="text-[18px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-semibold' : 'text-gray-700'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-[18px]">
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-semibold' : 'text-gray-700'
          }
        >
          Plants
        </NavLink>
      </li>
      <li className="text-[18px]">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? 'text-green-500 font-semibold' : 'text-gray-700'
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="backdrop-blur-md bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 shadow-md border-b border-white/50">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-green-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white/70 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-white/40"
            >
              {links}
            </ul>
          </div>

          {/* logo */}
          <Link to="/">
            <img className="lg:w-32 w-28" src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* center menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
        </div>

        {/* right button */}
        <div className="navbar-end">
          <Link
            to="/auth/login"
            className="btn bg-green-500 hover:bg-green-600 text-white border-none shadow-md transition-all duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
