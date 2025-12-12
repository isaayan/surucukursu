import React from 'react';
import { STATS } from '../constants';

const Statistics: React.FC = () => {
    return (
        <section 
            className="w-full py-20 bg-fixed bg-center bg-cover relative"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpZwqVx0FCn3vuyPBPuq4Z3BEYtAHheZtA80YpQBpDFtMnyDnH9aTAcHfWIJOhILpxh6N-DfpgPlmBfNutweuoNZJ6tgEdhg2eRFaHA_u7UK6IW97lLrgfuAc0yxSLeJGEAw2hW7_QfcaYZsF_TvCoVwteE6bzgj8tOK1-XNEprArq63r-2kUVQsQkLK7hUHASKfKd901np9Az65w5xrYV-CeYaWS4NzPSBbXMxbepRCypB2QwnbZ1nq4wvx3mkxYbp1F38q3Rkr8g')" }}
        >
            <div className="absolute inset-0 bg-secondary/90"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {STATS.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base opacity-80">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;