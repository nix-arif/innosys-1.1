import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <h1 className="font-normal text-xs ml-4">
        &copy; 2023 Smart Innosys Sdn Bhd
      </h1>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li className="text-xs mr-4">
          <Link to="admin">admin</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
