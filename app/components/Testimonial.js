import React from 'react';

const TestimonialSection = () => {
    return (
        <section
            className="relative h-full py-20 md:py-80"
            style={{
                backgroundImage: 'url(/images/testimonials.jpg)',
                backgroundSize: 'cover', // Ensure background covers entire section
                backgroundPosition: 'center', // Center the background
                backgroundRepeat: 'no-repeat', // Prevent background from repeating
                backgroundAttachment: 'fixed', // Fix the background on scroll
            }}
        >
            {/* Optional Dark Overlay */}
                {/* <div className="absolute inset-0 bg-white bg-opacity-60"></div> */}

            {/* Testimonial Section */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white max-w-3xl">
                    <h2 className="text-5xl lg:text-5xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-4xl italic mb-8 text-white">
                        "Radish Group has been a part of our family for years. Their food is always
                        outstanding, and the service is just as amazing."
                    </p>
                    <p className="font-semibold">- John Doe, Customer</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
