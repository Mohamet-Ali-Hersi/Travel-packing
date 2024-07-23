import React from 'react';
// Footer component displays a footer section with current year and a copyright messag
const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Travel Packing CheckList. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
