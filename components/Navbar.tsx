import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
    onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        // Intercept navigation for SPA behavior
        if (href === '#listing') {
            e.preventDefault();
            onNavigate('listing');
        } else if (href === '#faq') {
            e.preventDefault();
            onNavigate('faq');
        } else if (href === '#home') {
            e.preventDefault();
            onNavigate('home');
        } else if (href === '#about') {
            e.preventDefault();
            onNavigate('about');
        } else if (href === '#blog') {
            e.preventDefault();
            onNavigate('blog');
        } else if (href === '#iletisim') { 
            e.preventDefault();
            onNavigate('contact');
        }
        
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-surface-light dark:bg-surface-dark shadow-lg sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Area - Image Only */}
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="block">
                    <img 
                        src="assets/img/logo.png" 
                        alt="Sima Sürücü Kursu Logo" 
                        className="h-12 md:h-14 w-auto object-contain"
                    />
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8 font-medium text-sm text-gray-600 dark:text-gray-300">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`transition hover:text-primary ${link.name === 'ANASAYFA' ? 'text-secondary dark:text-white font-bold' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="https://esutr.com/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">person</span> KURSİYER GİRİŞİ
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-gray-700 dark:text-gray-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                 <div className="lg:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-col p-4 space-y-4 font-medium text-sm text-gray-600 dark:text-gray-300">
                         {NAV_LINKS.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                         <a 
                            href="https://esutr.com/login" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition text-center flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-sm">person</span> KURSİYER GİRİŞİ
                        </a>
                    </div>
                 </div>
            )}
        </nav>
    );
};

export default Navbar;