import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
