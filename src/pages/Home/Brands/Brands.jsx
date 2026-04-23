import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';

import tracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
import support from '../../../assets/safe-delivery.png';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];

const features = [
  {
    img: tracking,
    title: 'Live Parcel Tracking',
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img: safeDelivery,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
  },
  {
    img: support,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
  },
];

const Brands = () => {
  return (
    <section className="py-10 px-4">

      {/* Heading */}
      <h2 className="text-center text-xl font-semibold text-[#0d3d40] mb-8">
        We've helped thousands of sales teams
      </h2>

      {/* Brand Logos Swiper */}
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mb-10"
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img src={logo} alt={`brand-${index}`} className="h-5 object-contain mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dashed Divider */}
      <hr className="border-dashed border-gray-400 mb-10" />

      {/* Feature Cards */}
      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl flex items-center gap-0 overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <div className="w-60 min-w-[180px] flex items-center justify-center p-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-36 object-contain"
              />
            </div>

            {/* Dashed vertical divider */}
            <div className="self-stretch border-l border-dashed border-gray-300 mx-2" />

            {/* Text */}
            <div className="flex-1 py-6 pr-8 pl-4">
              <h3 className="text-[#0d3d40] font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Dashed Divider */}
      <hr className="border-dashed border-gray-400 mt-10" />

    </section>
  );
};

export default Brands;