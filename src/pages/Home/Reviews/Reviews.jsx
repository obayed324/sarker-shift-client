import React, { use, useRef } from 'react';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className="text-3xl text-center font-bold text-[#0d3d40] my-8">
                    What our customers are sayings
                </h3>
                <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (prevRef.current && nextRef.current) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}
                modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
                className="mySwiper pb-16!"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex items-center justify-center gap-6 mt-2">
                <button
                    ref={prevRef}
                    className="w-11 h-11 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-[#0d3d40] transition"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d3d40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    ref={nextRef}
                    className="w-11 h-11 rounded-full bg-[#c5e84a] flex items-center justify-center hover:brightness-95 transition"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d3d40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Reviews;