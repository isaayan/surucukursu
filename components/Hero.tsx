import React from 'react';

interface HeroProps {
    onNavigateToListing: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToListing }) => {
    return (
        <header 
            className="relative w-full min-h-[750px] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJcb-apx0sNBk-LE8ayPO1cl3nbRsn6Uu-SXjUFo0ST1x0ottxF1RvubZ9HqLRZDuU_3gfiC-_0Kvum3xvqulpb_fQWomQF3qX-aUGOa1rM5rMBCsSTRZaK1pn6NFWkxTbpu3NBpdQTziMuDu-YSvtMjOjGWN3kkuId3_1ceGjbxrlh2ZLkEtx2LB4MPm2xLTMkfSFfJn96iiC-XlVti4abqo7rmZX1qYitOqjVvWRhzbvp1vYOf7tyAb05KZo_DPiDK0uRKcDGE7Q')" }}
        >
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent z-0"></div>
            
            <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center h-full pt-10 pb-10">
                <div className="lg:col-span-7 text-white text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-semibold tracking-wider uppercase">Yeni Dönem Kayıtları Başladı</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-xl font-display">
                        Yolculuğun <br /> <span className="text-primary">Burada</span> Başlıyor
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light">
                        Profesyonel eğitmenlerimizle güvenli sürüş tekniklerini öğrenin, trafiğe 1-0 önde başlayın. Arifiye'nin en kapsamlı eğitim parkuru.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button 
                            onClick={onNavigateToListing}
                            className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group"
                        >
                            <span>Sınıfları İncele</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <a href="tel:+905332236721" className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition duration-300 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-primary">call</span>
                            Hemen Ara
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full">
                    <div className="glass-effect p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Hızlı Başvuru</h3>
                        <p className="text-gray-300 text-sm mb-6">Bilgilerinizi bırakın, uzman danışmanlarımız sizi arayıp bilgilendirsin.</p>
                        
                        {/* Formspree ile çalışan form */}
                        <form 
                            action="https://formspree.io/f/FORM_ID_BURAYA" 
                            method="POST"
                            className="space-y-4"
                        >
                            <div>
                                <label htmlFor="name" className="sr-only">Ad Soyad</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400">person</span>
                                    </div>
                                    <input required type="text" name="name" id="name" className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Adınız Soyadınız" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Telefon</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400">phone</span>
                                    </div>
                                    <input required type="tel" name="phone" id="phone" className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" placeholder="Telefon Numaranız" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="license" className="sr-only">Ehliyet Sınıfı</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400">directions_car</span>
                                    </div>
                                    <select required name="license_class" id="license" className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-gray-600 rounded-xl text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition appearance-none cursor-pointer">
                                        <option value="">Ehliyet Sınıfı Seçiniz</option>
                                        <option value="B">B Sınıfı (Otomobil)</option>
                                        <option value="A">A Sınıfı (Motosiklet)</option>
                                        <option value="A1">A1 Sınıfı</option>
                                        <option value="A2">A2 Sınıfı</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1 mt-2">
                                Hemen Başvur
                            </button>
                            <p className="text-[10px] text-gray-400 text-center mt-3">
                                *Bilgileriniz KVKK kapsamında korunmaktadır.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;