import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-secondary text-white text-xs py-3 hidden md:block border-b border-gray-700">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <span className="flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-primary"></i> 
                        Arifiye, Zübeyde Hanım Cd. NO:12A
                    </span>
                    <span className="flex items-center gap-2">
                        <i className="fa-solid fa-phone text-primary"></i> 
                        0264 502 09 05 &nbsp;|&nbsp; 0533 223 67 21
                    </span>
                    <span className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope text-primary"></i> 
                        info@simasurucukursu.com
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="opacity-80 font-light">Eğitimde Kalitenin Adresi</span>
                    <div className="h-4 w-px bg-gray-600"></div>
                    <div className="flex space-x-3">
                        <a href="https://www.instagram.com/simasurucukursuarifiye/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/905332236721" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;