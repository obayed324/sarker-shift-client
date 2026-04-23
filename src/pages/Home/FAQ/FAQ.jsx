import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from 'react-icons/fi';

const faqs = [
    {
        id: 1,
        question: 'How does this posture corrector work?',
        answer: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here\'s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.',
    },
    {
        id: 2,
        question: 'Is it suitable for all ages and body types?',
        answer: 'Yes, our posture corrector is designed to be suitable for a wide range of ages and body types. It features adjustable straps to ensure a comfortable and secure fit for most users.',
    },
    {
        id: 3,
        question: 'Does it really help with back pain and posture improvement?',
        answer: 'Absolutely. Regular use of a posture corrector can significantly reduce back pain by training your muscles to maintain proper alignment, reducing strain on your spine and surrounding muscles.',
    },
    {
        id: 4,
        question: 'Does it have smart features like vibration alerts?',
        answer: 'Yes, our smart posture corrector includes vibration alerts that gently remind you to correct your posture whenever it detects slouching, helping you build better habits over time.',
    },
    {
        id: 5,
        question: 'How will I be notified when the product is back in stock?',
        answer: 'You can sign up for restock notifications on the product page by entering your email address. We will send you an email as soon as the product becomes available again.',
    },
];

const FAQ = () => {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#0d3d40] mb-4">
                    Frequently Asked Question (FAQ)
                </h2>
                <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col gap-4">
                {faqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                        <div
                            key={faq.id}
                            className={`rounded-2xl border transition-all duration-300 ${isOpen
                                ? 'border-[#0d3d40] bg-[#f0f7f7]'
                                : 'border-gray-200 bg-white'
                                }`}
                        >
                            {/* Question Row */}
                            <button
                                onClick={() => toggle(faq.id)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="font-semibold text-[#0d3d40] text-sm">
                                    {faq.question}
                                </span>
                                {isOpen
                                    ? <FiChevronUp className="text-[#0d3d40] text-lg shrink-0" />
                                    : <FiChevronDown className="text-[#0d3d40] text-lg shrink-0" />
                                }
                            </button>

                            {/* Answer */}
                            {isOpen && (
                                <div className="px-6 pb-6">
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* See More Button */}
            <div className="flex items-center justify-center mt-10">
                <div className="relative">
                    <button className="bg-[#c5e84a] text-[#0d3d40] font-bold text-sm px-10 py-4 rounded-full pr-16 hover:brightness-95 transition">
                        See More FAQ's
                    </button>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-12 h-12 rounded-full bg-[#0d3d40] flex items-center justify-center">
                        <FiArrowUpRight className="text-white text-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;