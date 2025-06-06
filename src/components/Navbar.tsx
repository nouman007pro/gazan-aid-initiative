
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('news'), href: '#news' },
    { name: t('team'), href: '#team' },
    { name: t('donate'), href: '#donate' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-gaza-primary font-heading text-2xl font-bold">Gaza Aid Initiative</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gaza-dark hover:text-gaza-accent font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button 
              className="donation-button"
              onClick={() => document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'})}
            >
              {t('donateNow')}
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-gaza-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gaza-dark hover:text-gaza-accent font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="donation-button w-full"
              onClick={() => {
                document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'});
                setIsMenuOpen(false);
              }}
            >
              {t('donateNow')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
