import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';

interface BlogListPageProps {
    onPostClick: (id: string) => void;
    onBack: () => void;
}

const BlogListPage: React.FC<BlogListPageProps> = ({ onPostClick, onBack }) => {
    // 1. Durum Yönetimi (State): "Vanilla JS" mantığıyla çalışan basit filtre
    // Varsayılan olarak 'Tümü' seçilidir.
    const [activeCategory, setActiveCategory] = useState('Tümü');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Kategorileri otomatik çıkar (Tekrarları önle)
    // "Set" yapısı benzersiz değerleri tutar.
    const uniqueCategories = ['Tümü', ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

    // 2. Filtreleme Mantığı
    // Eğer 'Tümü' seçiliyse hepsini göster, değilse kategoriye göre eşleştir.
    const filteredPosts = activeCategory === 'Tümü' 
        ? BLOG_POSTS 
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-8 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header Alanı */}
                <div className="mb-10">
                     <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition mb-8 font-medium"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Anasayfaya Dön
                    </button>
                    <h1 className="text-4xl font-bold text-secondary dark:text-white mb-4">Sürücü Rehberi</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
                        Ehliyet süreci, güvenli sürüş teknikleri ve araç bakımı hakkında zamansız bilgiler.
                    </p>
                </div>

                {/* 3. Filtre Butonları (Navigasyon) */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {uniqueCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            data-filter={cat} // İstenilen data attribute
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition duration-300 border ${
                                activeCategory === cat 
                                    ? 'bg-secondary text-white border-secondary shadow-lg transform scale-105' 
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 4. Blog Kartları Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {filteredPosts.map((post) => (
                        <article 
                            key={post.id} 
                            data-category={post.category} // İstenilen data attribute
                            className="group cursor-pointer flex flex-col h-full bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700"
                            onClick={() => onPostClick(post.id)}
                        >
                            {/* Görsel Alanı */}
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                                />
                                <div className="absolute top-4 left-4 z-10">
                                     <span className={`text-white text-xs font-bold ${post.categoryColorClass} px-3 py-1.5 rounded-lg shadow-md tracking-wide`}>
                                         {post.category}
                                     </span>
                                </div>
                            </div>

                            {/* İçerik Alanı (Tarih/Yazar YOK) */}
                            <div className="p-7 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                                    {post.description}
                                </p>
                                
                                {/* Alt Buton */}
                                <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800">
                                    <button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Devamını Oku 
                                        <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Boş Durum Kontrolü */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">Bu kategoride henüz yazı bulunmamaktadır.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogListPage;