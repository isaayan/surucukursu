import React from 'react';
import { BLOG_POSTS } from '../constants';

interface BlogDetailProps {
    postId: string;
    onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ postId, onBack }) => {
    const post = BLOG_POSTS.find(p => p.id === postId);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [postId]);

    if (!post) return <div className="p-10 text-center">İçerik bulunamadı.</div>;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
            {/* Header Image */}
            <div className="relative h-[50vh] min-h-[400px]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90"></div>
                
                <div className="absolute top-0 left-0 p-6 z-20">
                     <button 
                        onClick={onBack}
                        className="bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black/50 transition border border-white/20"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Tüm Yazılar
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 container mx-auto">
                    <span className={`${post.categoryColorClass} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block`}>
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        {post.title}
                    </h1>
                    {/* Date and Author removed from here */}
                </div>
            </div>

            {/* Content Body */}
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 bg-white dark:bg-surface-dark p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                     {/* We use dangerouslySetInnerHTML here because the content comes from our constant file which is trusted */}
                     <div 
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-secondary dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-orange-600 prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                     />
                     
                     {/* Tags */}
                     <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <h4 className="text-sm font-bold text-gray-500 mb-3 uppercase">Etiketler</h4>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, idx) => (
                                <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                     </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                     {/* Author Box removed */}
                     
                    {/* CTA */}
                    <div className="bg-secondary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2">Ehliyet Almak İster misin?</h3>
                            <p className="text-gray-300 text-sm mb-6">Profesyonel eğitim ve uygun ödeme koşullarıyla hemen başla.</p>
                            <a href="#iletisim" onClick={onBack} className="block w-full bg-primary text-center py-3 rounded-xl font-bold hover:bg-orange-600 transition">
                                İletişime Geç
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;