import React from 'react';
import serviceImg from '../../../assets/service.png';

const services = [
    {
        title: 'Express & Standard Delivery',
        description:
            'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
        highlighted: false,
    },
    {
        title: 'Nationwide Delivery',
        description:
            'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.',
        highlighted: true,
    },
    {
        title: 'Fulfillment Solution',
        description:
            'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
        highlighted: false,
    },
    {
        title: 'Cash on Home Delivery',
        description:
            '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
        highlighted: false,
    },
    {
        title: 'Corporate Service / Contract In Logistics',
        description:
            'Customized corporate services which includes warehouse and inventory management support.',
        highlighted: false,
    },
    {
        title: 'Parcel Return',
        description:
            'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
        highlighted: false,
    },
];

const OurServices = () => {
    return (
        <section className="bg-[#0d3d40] rounded-3xl px-8 py-14 mx-4 my-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-white text-3xl font-bold mb-4">Our Services</h2>
                <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                    packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl p-7 text-center flex flex-col items-center ${service.highlighted ? 'bg-[#c5e84a]' : 'bg-white'
                            }`}
                    >
                        {/* Icon circle */}
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${service.highlighted ? 'bg-white/40' : 'bg-gray-100'
                                }`}
                        >
                            <img src={serviceImg} alt="service icon" className="w-10 h-10 object-contain" />
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-base text-[#0d3d40] mb-3">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p
                            className={`text-sm leading-relaxed ${service.highlighted ? 'text-[#2a4a1a]' : 'text-gray-500'
                                }`}
                        >
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;