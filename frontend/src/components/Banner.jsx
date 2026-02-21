import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="my-20 md:mx-10">
      <div
        className="relative overflow-hidden rounded-2xl bg-primary
       px-8 sm:px-12 md:px-16 py-12 sm:py-16 shadow-xl"
      >
      
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

        <div className="relative max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Book Your Doctor Appointment
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
            Consult with 100+ verified and trusted doctors anytime, anywhere.
          </p>

          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="mt-8 bg-white text-primary font-medium px-8 py-3 rounded-full 
                                   hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Create Account →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
