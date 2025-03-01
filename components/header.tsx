import React from 'react';
import CompanyLogo from './company-logo';

// import { IoCarSportSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="min-h-20 w-full bg-[#004643] p-3 flex mb-9 items-center">
      <div className="flex items-center justify-between w-full">
        <CompanyLogo />
        <div className="pr-5 flex text-white font-medium font-roboto">
          <h2 className="pl-5 hover:underline-offset-2 cursor-pointer hover:underline">
            O nas
          </h2>
          <h2 className="pl-5">Skontaktuj się z nami</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;