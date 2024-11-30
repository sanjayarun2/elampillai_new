import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MapPin, MessageCircle } from 'lucide-react';
import { storage } from '../utils/storage';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const whatsappLink = storage.get('whatsappLink', '');

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {whatsappLink && (
          <div 
            className="
              py-2 
              text-center 
              bg-green-500 
              fixed 
              bottom-0 
              left-0 
              right-0 
              z-50 
              md:relative 
              md:z-0 
              md:block
            "
          >
            {/* Fix: Added the anchor <a> tag here */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex 
                items-center 
                justify-center 
                w-full 
                space-x-2 
                text-white 
                hover:bg-green-600 
                transition-colors 
                duration-300 
                py-3 
                md:py-2
              "
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>எங்கள் சமூகத்தில் சேரவும் | Join Our Community</span>
            </a>
          </div>
        )}
        
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6" />
            <div>
              <h1 className="text-2xl font-bold">இளம்பிள்ளை</h1>
              <div className="text-xs">
                <span>Elampillai, Tamil Nadu 637502</span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"}>Home</NavLink>
            <NavLink to="/shops" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"}>Shops</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"}>News</NavLink>
            <NavLink to="/marketplace" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"}>Marketplace</NavLink>
            <NavLink to="/admin-dashboard" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"}>Admin Dashboard</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"} onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink to="/shops" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"} onClick={() => setIsOpen(false)}>Shops</NavLink>
              <NavLink to="/blog" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"} onClick={() => setIsOpen(false)}>News</NavLink>
              <NavLink to="/marketplace" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"} onClick={() => setIsOpen(false)}>Marketplace</NavLink>
              <NavLink to="/admin-dashboard" className={({isActive}) => isActive ? "text-yellow-200" : "hover:text-yellow-200 transition"} onClick={() => setIsOpen(false)}>Admin Dashboard</NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Optional: Add a small spacer for mobile to prevent content being hidden behind the fixed button */}
      <div className="h-16 md:hidden"></div>
    </header>
  );
}
