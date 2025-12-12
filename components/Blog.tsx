import React from 'react';
import { BLOG_POSTS } from '../constants';

interface BlogProps {
    onPostClick?: (id: string) => void;
    onViewAllClick?: () => void;
    limit?: number; // Optional limit for homepage
}

const Blog: React.FC<BlogProps> = ({ onPostClick, onViewAllClick, limit }) => {
    // If limit is provided, slice the array. Otherwise show all (or handle via parent)
    const displayPosts = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Blog & Haberler</span>
                        <h2 className="text-3xl font-bold text-secondary dark:text-white mt-2">Sürücü Rehberi</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Güvenli sürüş teknikleri ve sınav ipuçları.</p>
                    </div>
                    
                    {limit && (
                        <button 
                            onClick={onViewAllClick}
                            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-orange-600 transition mt-4 md:mt-0"
                        >
                            Tüm Yazıları Gör <span className="material-symbols-outlined">arrow_right_alt</span>
                        </button>
                    )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="group cursor-pointer flex flex-col h-full bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700"
                            onClick={() => onPostClick && onPostClick(post.id)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                                />
                                <div className="absolute top-4 left-4">
                                     <span className={`text-white text-xs font-bold ${post.categoryColorClass} px-3 py-1 rounded-full shadow-md`}>{post.category}</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition leading-tight">{post.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">{post.description}</p>
                                
                                {/* Date and Author REMOVED as per requirements */}
                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-end text-xs">
                                    <span className="text-primary font-bold group-hover:underline flex items-center gap-1">İncele <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {limit && (
                    <div className="mt-10 text-center md:hidden">
                        <button 
                            onClick={onViewAllClick}
                            className="bg-white dark:bg-surface-dark text-secondary dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm font-medium flex items-center gap-2 mx-auto"
                        >
                            Tüm Yazıları Gör
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;