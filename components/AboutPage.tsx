import React from 'react';

interface AboutPageProps {
    onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
    // Scroll to top when mounted
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pb-20">
            {/* Header / Hero */}
            <div className="relative h-[40vh] bg-secondary flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Direksiyon Eğitimi" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sima Sürücü Kursu</h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">Güvenli Sürüşün ve Kaliteli Eğitimin Adresi</p>
                </div>
                 <button 
                    onClick={onBack}
                    className="absolute top-8 left-4 md:left-8 z-30 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/20 transition border border-white/20"
                >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Anasayfaya Dön
                </button>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-30">
                
                {/* Intro Card */}
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 dark:border-gray-700">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Kurumsal</span>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">Vizyonumuz & Misyonumuz</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                            Sima Sürücü Kursu olarak temel amacımız, sadece ehliyet sınavını geçen bireyler değil, trafikte sorumluluk bilincine sahip, çevreye saygılı ve güvenli sürüş tekniklerini içselleştirmiş sürücüler yetiştirmektir. 
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                            Arifiye bölgesinde yılların verdiği tecrübe ile adaylarımıza şeffaf, dürüst ve kaliteli bir eğitim süreci sunuyoruz. Modern eğitim araçlarımız ve sürekli güncellenen eğitim müfredatımız ile trafiğe güvenle çıkmanız için yanınızdayız.
                        </p>
                    </div>
                </div>

                {/* Fleet Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Eğitim Araçlarımız</span>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mt-2">Modern Araç Filomuz</h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Eğitimlerinizde kullandığımız araçlar, sınav standartlarına tam uyumlu, bakımlı ve kullanımı kolay modellerden oluşmaktadır.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Motorcycles */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group">
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Motosiklet Eğitimi" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-secondary dark:text-white shadow">
                                    3 Adet Motosiklet
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">Motosiklet Filomuz</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    A, A1 ve A2 ehliyet sınıflarının her biri için uygun güç ve ağırlıkta, toplamda 3 adet eğitim motosikletimiz bulunmaktadır.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Başlangıç seviyesi için hafif ve dengeli modeller</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Sınav parkuru manevralarına uygun yapı</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Düzenli bakımları yapılan güvenli araçlar</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cars */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group">
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80" 
                                    alt="Otomobil Eğitimi" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-secondary dark:text-white shadow">
                                    2 Adet Otomobil
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-3">Otomobil Filomuz</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    B sınıfı ehliyet adaylarımız için hem manuel hem de otomatik vites seçeneği sunan, toplamda 2 adet eğitim aracımız hizmetinizdedir.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Manuel ve Otomatik vites seçenekleri</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Klimalı, konforlu ve temiz iç mekan</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Çift pedal sistemi ile maksimum güvenlik</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEW SECTION: Theory Classroom */}
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-xl overflow-hidden mb-20 border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="h-72 lg:h-auto relative">
                             <img 
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                                alt="Teorik Eğitim Sınıfı" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-secondary/10"></div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Eğitim Ortamımız</span>
                            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-4">Teorik Eğitim Sınıfımız</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Sınav başarısı sadece direksiyonla değil, doğru teorik bilgiyle gelir. Sima Sürücü Kursu olarak, ferah, klimalı ve teknolojik donanımlı sınıflarımızda, görsel materyaller eşliğinde sınavlara tam donanımlı hazırlanmanızı sağlıyoruz.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Sıkıcı ezberden uzak, akılda kalıcı anlatım tekniklerimiz ve güncel e-sınav müfredatına uygun ders içeriklerimizle, adaylarımızın ilk seferde başarıya ulaşmasını hedefliyoruz.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Staff Section */}
                <div className="bg-secondary text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">Eğitmen Kadromuz</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sabırlı ve Profesyonel Eğitim Ekibi</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                            Eğitim kadromuz; Milli Eğitim Bakanlığı sertifikasına sahip, pedagojik formasyonu olan, insan ilişkilerinde başarılı ve alanında uzman eğitmenlerden oluşmaktadır.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg mb-8">
                            Sima Sürücü Kursu olarak "herkes öğrenebilir" prensibiyle hareket ediyoruz. Eğitmenlerimiz, her adayın öğrenme hızına ve tarzına uygun, stresten uzak, sabırlı ve motive edici bir yaklaşım sergilemektedir. Amacımız sadece sınavı geçmeniz değil, trafikte kendinizi güvende hissetmenizdir.
                        </p>
                        <button onClick={onBack} className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
                            Eğitimlerimizi İnceleyin
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;