import React from 'react';

const LocationSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6 text-center md:text-left">Konumumuz</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                    
                    {/* Sol Sütun: Harita */}
                    <div className="h-[400px] lg:h-auto w-full bg-gray-200">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.649667791834!2d30.35756477653639!3d40.72551403677443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccad161a030431%3A0x6652c6a0c0071333!2sArifiye%20YHT%20Tren%20Gar%C4%B1!5e0!3m2!1str!2str!4v1709214732561!5m2!1str!2str" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Sima Sürücü Kursu Konum"
                            className="filter grayscale-[20%] hover:grayscale-0 transition duration-500"
                        ></iframe>
                    </div>

                    {/* Sağ Sütun: YHT Kartı */}
                    <div className="bg-secondary relative h-[400px] lg:h-[500px] flex flex-col">
                        {/* Üst Kısım: Görsel */}
                        <div className="h-3/5 w-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1584&q=80" 
                                alt="Yüksek Hızlı Tren" 
                                className="w-full h-full object-cover hover:scale-110 transition duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                Merkezi Konum
                            </div>
                        </div>
                        
                        {/* Alt Kısım: Metin */}
                        <div className="h-2/5 p-8 md:p-12 flex flex-col justify-center relative z-20">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-10 h-1 bg-primary rounded-full"></span>
                                <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Kolay Ulaşım</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                Yüksek Hızlı Tren (YHT) Karşısında
                            </h3>
                            <p className="text-gray-300">
                                Arifiye İstasyonu'nun hemen karşısında, ulaşımı en kolay noktada sizleri bekliyoruz.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationSection;