import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold"> My Packing List</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          {user ? (
            <button onClick={logout} className="text-white">Logout</button>
          ) : (
            <>
              <Link to="/signin" className="text-white">Sign In</Link>
              <Link to="/signup" className="text-white">Sign Up</Link>
            </>
          )}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-600 p-4">
          <Link to="/" className="block text-white">Home</Link>
          <Link to="/about" className="block text-white">About</Link>
          <Link to="/contact" className="block text-white">Contact</Link>
          {user ? (
            <button onClick={logout} className="block text-white">Logout</button>
          ) : (
            <>
              <Link to="/signin" className="block text-white">Sign In</Link>
              <Link to="/signup" className="block text-white">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;