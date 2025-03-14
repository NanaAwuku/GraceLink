import React from "react";
import logo from "../../assets/logo.png";
import { IoLanguageOutline } from "react-icons/io5";

const PrivateHeader = () => {
  return (
    <div>
      <header className="bg-white shadow-md border-b-1 border-gray-400 container-fluid mx-auto px-24">
        <div className="flex justify-between items-center py-4">
          <img src={logo} width={50} className="cursor-pointer " alt="" />

          <div className="cursor-pointer">
            <IoLanguageOutline size={24} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default PrivateHeader;
