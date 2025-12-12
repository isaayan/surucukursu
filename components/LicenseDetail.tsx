import React from 'react';
import { LICENSE_CLASSES } from '../constants';

interface LicenseDetailProps {
    licenseId: string;
    onBack: () => void;
}

const LicenseDetail: React.FC<LicenseDetailProps> = ({ licenseId, onBack }) => {
    const data = LICENSE_CLASSES.find(l => l.id === licenseId);

    // Scroll to top when mounted
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [licenseId]);

    if (!data) return <div className="p-10 text-center">İçerik bulunamadı.</div>;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
            {/* Hero Section of Detail Page */}
            {/* Yükseklik mobilde artırıldı (h-[65vh]) ve min-height eklendi */}
            <div className="relative h-[65vh] md:h-[60vh] min-h-[500px] w-full overflow-hidden">
                <img src={data.image} alt={data.seoTitle} className="w-full h-full object-cover" />
                
                {/* Daha güçlü ve okunabilirliği artıran gradyan katmanı */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                
                <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-16 md:pb-20">
                     <button 
                        onClick={onBack}
                        // Buton yukarıdan biraz daha aşağı alındı (top-10) ve stili güçlendirildi
                        className="absolute top-10 left-4 md:left-6 bg-black/40 backdrop-blur-md text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black/60 transition border border-white/20 z-20 shadow-lg"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Tüm Sınıflar
                    </button>
                    
                    {/* İçerik kapsayıcısı */}
                    <div className="relative z-10">
                        <span className={`inline-block ${data.badgeColorClass} ${data.badgeTextClass} px-3 py-1 rounded-md text-sm font-bold mb-4 bg-white/95 backdrop-blur shadow-sm`}>
                            {data.badge}
                        </span>
                        {/* Başlık ve açıklama için text-shadow eklendi */}
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-md leading-tight">
                            {data.seoTitle}
                        </h1>
                        <p className="text-gray-100 text-lg md:text-xl max-w-2xl font-normal leading-relaxed drop-shadow-sm opacity-95">
                            {data.seoDescription}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                            Genel Açıklama
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            {data.fullDescription}
                        </p>
                    </section>

                    <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            Kimler Alabilir? (Şartlar)
                        </h2>
                        <ul className="space-y-4">
                            {data.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-xs mt-0.5 shrink-0">{idx + 1}</div>
                                    <span className="text-gray-700 dark:text-gray-300">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-8 bg-secondary rounded-full"></span>
                            Eğitim ve Sınav Süreci
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {data.educationProcess}
                        </p>
                    </section>

                    {/* Keywords / Tags */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                        <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">İlgili Konular</h4>
                        <div className="flex flex-wrap gap-2">
                            {data.keywords.map((kw, idx) => (
                                <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition cursor-default">
                                    #{kw}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Hemen Başvur</h3>
                        <p className="text-sm text-gray-500 mb-6">Kontenjanlar dolmadan yerinizi ayırtın.</p>
                        
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Adınız Soyadınız" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
                            <input type="tel" placeholder="Telefon Numaranız" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none dark:text-white" />
                            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:-translate-y-1">
                                {data.title} İçin Başvur
                            </button>
                        </form>

                        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
                            <span className="material-symbols-outlined text-lg">call</span>
                            <span>veya bizi arayın: </span>
                            <a href="tel:+905332236721" className="font-bold text-secondary dark:text-white hover:text-primary">0533 223 67 21</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LicenseDetail;