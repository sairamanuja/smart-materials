import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Smart Materials</h3>
            <p className="text-gray-400 text-sm">
              Advanced AI-powered material detection and educational platform for material science enthusiasts and professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#materials" className="text-gray-400 hover:text-white transition">Materials Library</a></li>
              <li><a href="#scanner" className="text-gray-400 hover:text-white transition">AI Scanner</a></li>
              <li><a href="#feedback" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <p className="text-gray-400 text-sm mb-2">
              Bridging material science and artificial intelligence for better material identification and education.
            </p>
            <p className="text-gray-500 text-xs">
              © 2026 Smart Materials. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Built with React, Node.js, and FastAPI | Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
