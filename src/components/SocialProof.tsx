"use client";

import React from 'react';

const SocialProof = () => {
    const phrases = [
        'Together, We Learn Better',
        'The Future Belongs to the Intelligent',
        'Smarter Learning Starts Here',
        'Powered by Intelligence',
        'Learning Never Stops',
        'Together, We Learn Better',
        'The Future Belongs to the Intelligent',
        'Smarter Learning Starts Here',
        'Powered by Intelligence',
        'Learning Never Stops',
    ];

    return (
        <section className="overflow-hidden" style={{ background: 'linear-gradient(90deg, #6d3bef 0%, #a855c8 35%, #ef5f3a 75%, #f97316 100%)' }}>
            <style>{`
                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 28s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="marquee-track py-4">
                {phrases.map((phrase, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-6 px-6 text-white font-semibold text-[15px] tracking-wide whitespace-nowrap select-none"
                    >
                        {phrase}
                        <span className="text-white/50 text-xs">✦</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default SocialProof;
