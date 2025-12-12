import React from 'react';
import FAQ from './FAQ';

interface FAQPageProps {
    onBack: () => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onBack }) => {
    // Scroll to top when mounted
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-10 text-center max-w-2xl mx-auto">
                     <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition mb-8"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Anasayfaya Dön
                    </button>
                    <h1 className="text-4xl font-bold text-secondary dark:text-white mb-4">Sıkça Sorulan Sorular</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Ehliyet alma süreci, fiyatlar, sınavlar ve eğitimler hakkında aklınıza takılan tüm soruların cevaplarını burada bulabilirsiniz.
                    </p>
                </div>

                {/* Reuse the FAQ component but show ALL items without the "View All" button */}
                <FAQ limit={undefined} showViewAll={false} />
                
                {/* Extra Help Box */}
                <div className="max-w-3xl mx-auto mt-12 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
                    <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">Aradığınız soruyu bulamadınız mı?</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                        Uzman eğitim danışmanlarımız size yardımcı olmaktan mutluluk duyacaktır.
                    </p>
                    <a href="tel:+905332236721" className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 inline-flex items-center gap-2">
                        <span className="material-symbols-outlined">call</span>
                        Bizi Arayın
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;