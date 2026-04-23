import React from 'react';
import locationMerchant from '../../../assets/location-merchant.png';
import beAMerchantBg from '../../../assets/merchant.png';

const BeAMerchant = () => {
    return (
        <section className="relative bg-[#0d3d40] rounded-3xl mx-4 my-6 overflow-hidden min-h-[280px] flex items-center">

            {/* Top right decorative bg */}
            <img
                src={beAMerchantBg}
                alt=""
                className="absolute top-0 right-0 w-1/2 pointer-events-none z-0"
            />

            {/* Left text content */}
            <div className="relative z-10 px-10 py-12 max-w-lg">
                <h2 className="text-white text-2xl font-bold leading-snug mb-4">
                    Merchant and Customer Satisfaction <br /> is Our First Priority
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    We offer the lowest delivery charge with the highest value along with
                    100% safety of your product. ZapShift courier delivers your parcels in every
                    corner of Bangladesh right on time.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <button className="bg-[#c5e84a] text-[#0d3d40] font-bold text-sm px-6 py-3 rounded-full hover:brightness-95 transition">
                        Become a Merchant
                    </button>
                    <button className="border border-[#c5e84a] text-[#c5e84a] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#c5e84a] hover:text-[#0d3d40] transition">
                        Earn with ZapShift Courier
                    </button>
                </div>
            </div>

            {/* Right illustration */}
            <div className="absolute right-10 bottom-0 z-10 hidden lg:block">
                <img
                    src={locationMerchant}
                    alt="merchant illustration"
                    className="h-56 object-contain"
                />
            </div>

        </section>
    );
};

export default BeAMerchant;