import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, User, LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  user: any;
  setIsAuthenticated: (auth: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, user, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SupplyAI</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              How It Works
            </Link>
            <Link to="/ai-engine" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              AI Engine
            </Link>
            <Link to="/insights" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Insights
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <User size={16} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/ai-engine"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              AI Engine
            </Link>
            <Link
              to="/insights"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <div className="border-t pt-4">
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="border-t pt-4">
                <Link
                  to="/auth"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;