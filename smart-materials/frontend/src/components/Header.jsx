import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpg" 
              alt="Easy Materials Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#materials" className="text-gray-700 hover:text-blue-600 transition">Materials</a>
            <a href="#scanner" className="text-gray-700 hover:text-blue-600 transition">AI Scanner</a>
            <a href="#feedback" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
