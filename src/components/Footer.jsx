import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    'Featured Dishes',
    'Top Rated',
    'Premium Selection',
    'Vegetarian',
    'Desserts',
    'Beverages',
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Offers
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new dishes, 
              special promotions, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address "
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none  focus:ring-white"
              />
              <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-orange-500 rounded-full p-2">
                  <span className="text-white font-bold text-xl">🍽️</span>
                </div>
                <span className="text-2xl font-bold text-orange-500">FoodieHub</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Bringing you the finest dining experience with fresh ingredients, 
                expert preparation, and exceptional service since 2008.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/cart"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    My Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menu Categories */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Menu Categories</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to="/menu"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>123 Food Street</p>
                    <p>Culinary District</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>(555) 123-4567</p>
                    <p>(555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>info@foodiehub.com</p>
                    <p>orders@foodiehub.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Mon-Thu: 11am-10pm</p>
                    <p>Fri-Sat: 11am-11pm</p>
                    <p>Sun: 12pm-9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} FoodieHub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
