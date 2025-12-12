import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section className="relative z-20 -mt-20 container mx-auto px-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={`bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-xl border-b-4 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} transform hover:-translate-y-2 transition duration-300 text-center group`}
                    >
                        <div className={`w-16 h-16 mx-auto ${service.iconBgClass} rounded-2xl flex items-center justify-center mb-4 transition duration-300 ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} group-hover:rotate-0`}>
                            <span className={`material-symbols-outlined text-3xl ${service.colorClass} group-hover:text-white transition`}>{service.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-secondary dark:text-white">{service.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;