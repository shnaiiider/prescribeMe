import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-primary rounded-2xl px-6 md:px-10 lg:px-20 py-14 md:py-20 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* --------- Left --------- */}
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Book Appointment <br className="hidden sm:block" />
            With Trusted Doctors
          </h1>

          <a
            href="#speciality"
            className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full 
                       text-gray-700 text-sm sm:text-base font-medium 
                       hover:scale-105 hover:bg-gray-100 transition-all duration-300 
                       w-fit mx-auto md:mx-0"
          >
            Book Appointment
            <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
