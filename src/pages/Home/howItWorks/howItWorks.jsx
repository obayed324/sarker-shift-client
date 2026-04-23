import React from 'react';
import { FaTruck } from 'react-icons/fa';

const services = [
    {
        title: 'Booking Pick & Drop',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        title: 'Cash On Delivery',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        title: 'Delivery Hub',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
    {
        title: 'Booking SME & Corporate',
        description: 'From personal packages to business shipments — we deliver on time, every time.',
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-[#f0f0ee] px-6 py-10 rounded-xl mb-5">
            <h2 className="text-2xl font-bold text-[#0d3d40] mb-8">How it Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-5 border border-gray-200"
                    >
                        <div className="mb-4">
                            <FaTruck className="text-[#0d3d40] text-4xl" />
                        </div>
                        <h3 className="text-[#0d3d40] font-semibold text-base mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;