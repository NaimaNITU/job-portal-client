import React, { useContext } from "react";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire("You signed out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Home
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Find a Job
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recruiters"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Recruiters
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/candidates"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Candidates
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Pages
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="hover:text-blue-600 flex items-center gap-1 group"
        >
          Blog
          <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-blue-600" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="border border-dashed border-blue-500 rounded px-3 py-1 text-blue-600 hover:bg-blue-50"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white px-6 shadow-sm">
      {/* Logo */}
      <div className="navbar-start">
        <NavLink
          to="/"
          className="text-2xl font-bold flex items-center gap-2 text-blue-800"
        >
          <div className="w-5 h-5 bg-blue-500 rotate-45" />
          Job<span className="text-blue-600">Box</span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="navbar-end hidden lg:flex gap-3">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 rounded-md"
          >
            Sign Out
          </button>
        ) : (
          <>
            <NavLink to="/register" className="text-blue-700 underline">
              Register
            </NavLink>
            <NavLink
              to="/signin"
              className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 rounded-md"
            >
              Sign in
            </NavLink>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links}
            <div className="mt-2 border-t pt-2">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-blue-700 underline"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="text-blue-700 underline">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signin"
                      className="btn bg-blue-600 text-white hover:bg-blue-700 w-full"
                    >
                      Sign in
                    </NavLink>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
