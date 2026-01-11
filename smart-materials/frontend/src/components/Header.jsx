import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">EM</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Easy Materials</h1>
              <p className="text-sm text-gray-600">AI-Powered Material Detection</p>
            </div>
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
