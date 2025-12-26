
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Youtube, Instagram, Music2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#5F2AFF] to-[#00B8D9] bg-clip-text text-transparent">
                My Life With Jesus 3
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-[#5F2AFF] transition-colors">Home</Link>
              <Link 
                to="/register" 
                className="bg-[#5F2AFF] text-white px-5 py-2 rounded-full font-medium hover:bg-[#4A1ECC] transition-all shadow-md active:scale-95"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2a1f4d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-[#00B8D9] transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-[#00B8D9] transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-[#00B8D9] transition-colors"><Youtube size={24} /></a>
            <a href="#" className="hover:text-[#00B8D9] transition-colors"><Music2 size={24} /></a> {/* TikTok Icon Proxy */}
            <a href="#" className="hover:text-[#00B8D9] transition-colors"><Instagram size={24} /></a>
          </div>
          <p className="text-gray-400 mb-2">Follow us for updates and daily inspiration.</p>
          <p className="text-sm opacity-60">© 2025 My Life With Jesus 3 — All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
