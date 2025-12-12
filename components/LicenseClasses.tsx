import React from 'react';
import { LICENSE_CLASSES } from '../constants';

interface LicenseClassesProps {
    onNavigateToListing: () => void;
    onNavigateToDetail: (id: string) => void;
}

const LicenseClasses: React.FC<LicenseClassesProps> = ({ onNavigateToListing, onNavigateToDetail }) => {
    // Only show the first 3 on the home page as a teaser
    const displayClasses = LICENSE_CLASSES.slice(0, 3);

    return (
        <section id="ehliyet" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-left max-w-2xl">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Hizmetlerimiz</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mt-2">Ehliyet Sınıfları</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">Hayallerinizdeki araca kavuşmak için ihtiyacınız olan ehliyet sınıfını seçin, uzman eğitmenlerimizle hemen hazırlığa başlayın.</p>
                    </div>
                    <button 
                        onClick={onNavigateToListing}
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-orange-600 transition mt-4 md:mt-0"
                    >
                        Tüm Sınıfları Gör <span className="material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayClasses.map((item) => (
                        <div key={item.id} className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 border border-gray-100 dark:border-gray-700">
                            <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-700 p-6 flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-gray-700 transition duration-300">
                                <span className={`absolute top-4 right-4 ${item.badgeColorClass} ${item.badgeTextClass} text-xs font-bold px-3 py-1 rounded-full z-10 border`}>{item.badge}</span>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className={`h-full object-contain group-hover:scale-110 transition duration-500`} 
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">{item.shortDescription}</p>
                                <button 
                                    onClick={() => onNavigateToDetail(item.id)}
                                    className={`w-full block text-center py-3 border-2 ${item.id.includes('b-class') || item.id === 'b-manuel' ? 'border-secondary text-secondary hover:bg-secondary hover:text-white' : 'border-primary text-primary hover:bg-primary hover:text-white'} font-bold rounded-xl transition`}
                                >
                                    Detayları Gör
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-8 text-center md:hidden">
                    <button 
                        onClick={onNavigateToListing}
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-orange-600 transition"
                    >
                        Tüm Sınıfları Gör <span className="material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LicenseClasses;