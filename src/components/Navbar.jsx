import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-gray-800 sticky top-0 z-10 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="/" className="text-white">Home</a></li>
            <li>
              <a className="text-white">Admin Panel</a>
              <ul className="p-2">
                <li><a href="/admin/manage-profiles" className="text-white">Manage Profiles</a></li>
              </ul>
            </li>
            <li><a href="/about" className="text-white">About</a></li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl text-white">LocateMe</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/" className="text-white">Home</a></li>
          <li>
            <details>
              <summary className="text-white">Admin Panel</summary>
              <ul className="p-2">
                <li><a href="/admin/manage-profiles" className="text-black">Manage Profiles</a></li>
              </ul>
            </details>
          </li>
          <li><a href="/about" className="text-white">About</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary" href="/login">Login</a>
      </div>
    </div>
  );
}

export default Navbar;

