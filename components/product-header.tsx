import React from 'react'
import CompanyLogo from './company-logo';

function ProductHeader() {
  return (
    <header className="min-h-20 w-full bg-[#004643] p-3 flex mb-9 items-center text-white">
      <div className="flex items-center justify-between w-full">
        {/* <IoCarSportSharp /> */}
        <CompanyLogo />
        <div className="pr-5 flex font-medium font-roboto">
          <h2 className="pl-5">Zapytaj o ofertę</h2>
        </div>
      </div>
    </header>
  );
}

export default ProductHeader;