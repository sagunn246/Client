import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import SignInModal from './SignInModal';

function Navbar() {
  const { totalItems } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() && location.pathname !== '/menu') {
      navigate('/menu');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/menu');
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <div className="bg-orange-500 rounded-full p-3">
                <span className="text-white font-bold text-2xl">🍽️</span>
              </div>
              <span className="text-3xl font-bold text-orange-500">Daddy's Kitchen</span>
            </Link>

            {/* Desktop Navigation and Search */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 max-w-4xl mx-8">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-gray-700 hover:text-orange-500 px-4 py-2 rounded-md text-lg font-medium transition-colors whitespace-nowrap ${isActive(item.path) ? 'text-orange-500 bg-orange-50' : ''
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for dishes..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search */}
              <div className="lg:hidden">
                <form onSubmit={handleSearchSubmit} className="hidden sm:block">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      placeholder="Search..."
                      className="w-32 pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </form>
              </div>

              {/* Sign In */}
              <button
                onClick={() => setIsSignInModalOpen(true)}
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-3 text-gray-700 hover:text-orange-500 transition-colors bg-gray-50 hover:bg-orange-50 rounded-full flex-shrink-0"
              >
                <ShoppingCart className="h-7 w-7" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-full text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors flex-shrink-0"
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-6 space-y-3 bg-white border-t border-gray-100">
                <div className="sm:hidden px-2">
                  <form onSubmit={handleSearchSubmit}>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search for dishes..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                      />
                    </div>
                  </form>
                </div>

                <div className="sm:hidden px-2">
                  <button
                    onClick={() => {
                      setIsSignInModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span>Sign In</span>
                  </button>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors ${isActive(item.path)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
