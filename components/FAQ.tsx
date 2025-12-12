import React, { useState } from 'react';
import { FAQS } from '../constants';

interface FAQProps {
    limit?: number;
    showViewAll?: boolean;
    onViewAllClick?: () => void;
}

const FAQ: React.FC<FAQProps> = ({ limit, showViewAll, onViewAllClick }) => {
    // Exclusive accordion state: null means all closed, number means that index is open
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close if already open
        } else {
            setActiveIndex(index); // Open new one, others close automatically
        }
    };

    // Slice the data if limit is provided
    const displayFAQs = limit ? FAQS.slice(0, limit) : FAQS;

    return (
        <section id="sss" className="py-20 bg-background-light dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Merak Ettikleriniz</span>
                    <h2 className="text-3xl font-bold text-secondary dark:text-white mt-2">Sıkça Sorulan Sorular</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {displayFAQs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`group bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 ${activeIndex === index ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}
                        >
                            <button 
                                onClick={() => toggleQuestion(index)}
                                className="w-full flex justify-between items-center font-medium cursor-pointer p-6 text-secondary dark:text-white text-left focus:outline-none"
                            >
                                <span className="text-lg">{faq.question}</span>
                                <span className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="text-gray-600 dark:text-gray-400 px-6 pb-6 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className="mt-10 text-center">
                         <button 
                            onClick={onViewAllClick}
                            className="bg-white dark:bg-surface-dark text-secondary dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm font-medium flex items-center gap-2 mx-auto"
                        >
                            Tüm Soruları Gör
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQ;