import React from 'react';
import LocationSection from './LocationSection';

interface ContactPageProps {
    onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "İletişim - Sima Sürücü Kursu | Arifiye";
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 transition-colors duration-300">
            {/* Header / Hero */}
            <div className="bg-secondary text-white pt-24 pb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Bize Ulaşın</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
                    <p className="text-gray-300 max-w-xl mx-auto text-lg">
                        Sorularınız mı var? Ehliyet süreci hakkında bilgi almak veya kayıt olmak için bizimle iletişime geçin.
                    </p>
                </div>
                 <button 
                    onClick={onBack}
                    className="absolute top-8 left-4 md:left-8 z-30 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition border border-white/20"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Anasayfaya Dön
                </button>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                {/* BÖLÜM A: İletişim Bilgileri ve Form */}
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Sol Taraf: İletişim Formu */}
                        <div className="p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">Mesaj Gönderin</h3>
                            
                            {/* Çalışan Form */}
                            <form action="https://formspree.io/f/FORM_ID_BURAYA" method="POST" className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-600 dark:text-gray-300">Ad Soyad</label>
                                        <input required name="name" type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition dark:text-white" placeholder="Adınız" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="phone" className="text-sm font-semibold text-gray-600 dark:text-gray-300">Telefon</label>
                                        <input required name="phone" type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition dark:text-white" placeholder="05XX..." />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="subject" className="text-sm font-semibold text-gray-600 dark:text-gray-300">Konu</label>
                                    <select name="subject" id="subject" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition dark:text-white">
                                        <option>Ehliyet Fiyatları Hakkında</option>
                                        <option>Kayıt İşlemleri</option>
                                        <option>Direksiyon Dersi</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-600 dark:text-gray-300">Mesajınız</label>
                                    <textarea required name="message" id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent transition dark:text-white resize-none" placeholder="Sorunuzu buraya yazabilirsiniz..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition transform hover:-translate-y-1">
                                    Gönder
                                </button>
                            </form>
                        </div>

                        {/* Sağ Taraf: İletişim Bilgileri */}
                        <div className="bg-secondary text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                             {/* Dekoratif Arkaplan */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                             
                             <h3 className="text-2xl font-bold mb-8 relative z-10">İletişim Bilgileri</h3>
                             
                             <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Adres</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            Zübeyde Hanım Cd. NO:12A, <br/>
                                            54580 Arifiye / Sakarya
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Telefon</h4>
                                        <p className="text-gray-300 mb-1">Haftanın her günü arayabilirsiniz.</p>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+902645020905" className="text-xl font-bold text-white hover:text-primary transition">
                                                0264 502 09 05
                                            </a>
                                            <a href="tel:+905332236721" className="text-xl font-bold text-white hover:text-primary transition">
                                                0533 223 67 21
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">E-Posta</h4>
                                        <a href="mailto:info@simasurucukursu.com" className="text-gray-300 hover:text-white transition">
                                            info@simasurucukursu.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Çalışma Saatleri</h4>
                                        <p className="text-gray-300">
                                            Hafta içi ve Cumartesi günleri hizmet vermekteyiz.
                                        </p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* BÖLÜM B: Konum ve YHT Vurgusu - Using Reusable Component */}
                <div className="mb-12">
                     <LocationSection />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;