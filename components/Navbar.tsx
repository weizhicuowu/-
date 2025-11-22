import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Download, Home, MessageSquare, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home', icon: <Home size={18} /> },
    { name: '及时雨反外挂', href: '#anticheat', icon: <Shield size={18} /> },
    { name: '引擎下载', href: '#download', icon: <Download size={18} /> },
    { name: '更新日志', href: '#changelog', icon: <FileText size={18} /> },
    { name: '官方论坛', href: '#forum', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center group cursor-pointer transform transition-transform hover:scale-105">
          <div className="relative w-10 h-10 mr-3 flex items-center justify-center bg-black border border-cyan-500 rounded shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-shadow">
             <span className="text-cyan-400 font-bold text-xl">JS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors duration-300 font-tech">
              及时雨引擎
            </span>
            <span className="text-xs text-gray-400 tracking-[0.2em] uppercase">www.jsym2.com</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] hover:scale-110 active:scale-95 font-tech"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-cyan-400 transition-colors hover:scale-110 active:scale-90"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-card border-b border-slate-800 py-4 px-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-lg text-gray-300 hover:text-cyan-400 py-2 border-b border-slate-800 last:border-0 active:bg-gray-800/50 pl-2 rounded transition-all font-tech"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};