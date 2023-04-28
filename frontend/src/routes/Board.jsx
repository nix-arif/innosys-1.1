import React from "react";

function Board() {
  return (
    <div className="mx-auto font-sora m-10 p-10 max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto">
        <div className="p-10 border border-blue-gray-300 rounded-xl relative mb-20">
          <h1 className="text-[#005494] text-3xl uppercase font-semibold mb-4 absolute -top-[1.2rem] bg-white px-5">
            Chairman Message
          </h1>
          <div className="relative h-32 mb-5 md:h-24 md:mb-5">
            <img
              src="assets/faeza.png"
              alt="faeza"
              className="h-32 rounded-xl absolute md:right-5 md:h-48"
            />
          </div>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-sm md:text-base">
            Dear Valued Customers and Partners,
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-sm md:text-base">
            Welcome to SMART INNOSYS SDN BHD
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            I am delighted to personally extend a warm welcome to you. Our
            website serves as a window into our world, showcasing our commitment
            to excellence in the field of medical distribution and our
            dedication to meeting the evolving needs of the healthcare industry.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            We understand the vital role that medical supplies and equipment
            play in saving lives and improving patient outcomes. With our
            extensive network of trusted suppliers and our focus on quality,
            reliability, and efficiency, will contribute in improving the
            quality of healthcare.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            Our team of experienced professionals is driven by a shared passion
            for providing healthcare providers with the resources they need to
            deliver exceptional care. From pharmaceuticals and surgical
            instruments to medical devices and personal protective equipment, we
            offer a comprehensive range of products that meet the highest
            industry standards.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            We continuously invest in research and development, exploring
            innovative technologies and products that have the potential to
            revolutionize healthcare delivery. Our goal is to be your trusted
            partner in progress, offering you access to cutting-edge solutions
            that enhance patient care and improve operational efficiency.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            I invite you to explore our website and learn more about our
            company, our products, and the values that drive us. We are
            confident that you will discover why SMART INNOSYS SDN BHD is a
            preferred choice for medical distribution.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-justify text-sm md:text-base">
            Thank you for visiting us. We look forward to the opportunity to
            serve you and contribute to your success.
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-sm md:text-base">
            Warm regards,
          </p>
          <p className="px-0 md:px-5 text-gray-700 text-sm md:text-base">
            Faeza Binti Omar
          </p>
          <p className="px-0 md:px-5 mb-5 text-gray-700 text-sm md:text-base">
            Chairman
          </p>
        </div>
      </div>
    </div>
  );
}

export default Board;
