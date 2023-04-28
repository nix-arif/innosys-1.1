import React from "react";

function Contact() {
  return (
    <div className="mx-auto font-sora m-10 p-10 max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto">
        <div className="p-10 border border-blue-gray-300 rounded-xl relative mb-20">
          <h1 className="text-[#005494] text-3xl uppercase font-semibold mb-4 absolute -top-[1.2rem] bg-white px-5">
            Contact Us
          </h1>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            SMART INNOSYS SDN BHD
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            B 18 3A, The Hyve Jalan Impact
            <br />
            Cyber 6, 63000 Cyberjaya
            <br />
            Selangor, Malaysia
          </p>

          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            smart.innosys@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
