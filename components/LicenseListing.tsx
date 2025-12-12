import React from 'react';
import { LICENSE_CLASSES } from '../constants';

interface LicenseListingProps {
    onSelectLicense: (id: string) => void;
    onBack: () => void;
}

const LicenseListing: React.FC<LicenseListingProps> = ({ onSelectLicense, onBack }) => {
    // Scroll to top when mounted
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-10">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-500 hover:text-primary transition mb-4"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Anasayfaya Dön
                    </button>
                    <h1 className="text-4xl font-bold text-secondary dark:text-white mb-4">Tüm Ehliyet Sınıfları</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
                        Hayalinizdeki aracı kullanmak için ilk adımı atın. Sima Sürücü Kursu olarak, motosikletten otomobile kadar geniş bir yelpazede profesyonel eğitim sunuyoruz. Size en uygun sınıfı aşağıdan seçin.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LICENSE_CLASSES.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 border border-gray-100 dark:border-gray-700 flex flex-col">
                            <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <span className={`absolute top-4 right-4 ${item.badgeColorClass} ${item.badgeTextClass} text-xs font-bold px-3 py-1 rounded-full z-10 border shadow-sm`}>
                                    {item.badge}
                                </span>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                                    {item.shortDescription}
                                </p>
                                <button 
                                    onClick={() => onSelectLicense(item.id)}
                                    className="w-full py-3 bg-white border-2 border-secondary text-secondary font-bold rounded-xl hover:bg-secondary hover:text-white transition duration-300 flex items-center justify-center gap-2 group/btn"
                                >
                                    Detayları Gör
                                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LicenseListing;