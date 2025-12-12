import React from 'react';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    
    const handleLinkClick = (e: React.MouseEvent, page: string) => {
        e.preventDefault();
        onNavigate(page);
    };

    return (
        <footer className="bg-[#1A1A1A] text-gray-400 py-16 border-t border-primary/20 relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Column */}
                    <div>
                        {/* Logo - Image Only */}
                        <div className="mb-6">
                            <img 
                                src="assets/img/logo.png" 
                                alt="Sima Sürücü Kursu" 
                                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Sima Arifiye Sürücü Kursu, güvenli sürüşü bir yaşam tarzı haline getirmeyi hedefler. Modern eğitim teknikleri ve uzman kadromuzla yanınızdayız.
                        </p>
                        <div className="flex space-x-3">
                            <a href="https://www.instagram.com/simasurucukursuarifiye/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://wa.me/905332236721" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>

                    {/* Quick Menu */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Hızlı Menü</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-primary transition flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Anasayfa</a></li>
                            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-primary transition flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Hakkımızda</a></li>
                            <li><a href="#listing" onClick={(e) => handleLinkClick(e, 'listing')} className="hover:text-primary transition flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Ehliyetler</a></li>
                            <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')} className="hover:text-primary transition flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> Blog</a></li>
                            <li><a href="#iletisim" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-primary transition flex items-center gap-2"><span className="material-symbols-outlined text-xs">chevron_right</span> İletişim</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> İletişim</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                                <p>Zübeyde Hanım Cd. NO:12A, 54580 <br />Arifiye/Sakarya</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">call</span>
                                <div className="flex flex-col">
                                    <p>0264 502 09 05</p>
                                    <p>0533 223 67 21</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">mail</span>
                                <p>info@simasurucukursu.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Çalışma Saatleri</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex justify-between"><span>Pazartesi:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Salı:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Çarşamba:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Perşembe:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Cuma:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Cumartesi:</span> <span>09:00 - 19:00</span></li>
                            <li className="flex justify-between"><span>Pazar:</span> <span>09:00 - 19:00</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-gray-500">Telif Hakkı © 2024 Sima Sürücü Kursu. Tüm Hakları Saklıdır.</p>
                    <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                        <span className="text-gray-600">Designed & Developed by</span>
                        <a 
                            href="https://www.linkedin.com/in/isa-ayan/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full font-bold border border-gray-700 hover:border-primary hover:text-primary transition"
                        >
                           İsa AYAN
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;