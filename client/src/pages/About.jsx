import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-black pb-6 sm:pt-8 lg:pt-5">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 lg:ml-16"> {/* Shift content right */}
          <div className="xl:w-6/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              About Us
            </p>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              Welcome to Outfit Vibes
            </h1>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Outfit Vibes is your personal style assistant designed to help you
              pick the perfect outfit for every occasion. Whether it's a casual
              day out, a formal event, or a themed party, we provide tailored
              outfit suggestions to match your vibe.
            </p>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Our platform takes into account event type, current trends, and
              your preferences, offering stylish outfit ideas. Plus, we guide
              you to trusted websites to purchase these outfits effortlessly.
            </p>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              With Outfit Vibes, dressing for any event becomes simple, stylish,
              and stress-free!
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <div>
                <Link
                  to="/"
                  className="relative inline-block text-lg group"
                >
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Explore Outfits</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
            </div>
          </div>

          {/* Adjusted the image height */}
          <div className="xl:w-5/12 h-30 lg:h-45 bg-gray-100 overflow-hidden shadow-lg rounded-lg"> {/* Smaller height */}
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Fashion inspiration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
