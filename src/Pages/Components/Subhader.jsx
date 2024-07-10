// import React from 'react'
import { FaFacebook, FaTwitter, FaBehance, FaLinkedinIn } from "react-icons/fa";

function Subhader() {
  return (
    <div className={`bg-[#1f272b]`}>
      <div className={`w-[80%] m-auto text-white text-13px`}>
        <div className={`flex items-center justify-between h-9 font-medium`}>
          <div>
            This is an educational{" "}
            <a href="#" className={`text-[#f5a425]`}>
              HTML CSS
            </a>
            template by TemplateMo website.
          </div>
          <div className={`flex item-center justify-between gap-4`}>
            <a href="#">
              <FaFacebook
                className={`hover:text-[#f5a425] transition-[700ms]`}
              />
            </a>
            <a href="#">
              <FaTwitter
                className={`hover:text-[#f5a425] transition-[700ms]`}
              />
            </a>
            <a href="#">
              <FaBehance
                className={`hover:text-[#f5a425] transition-[700ms]`}
              />
            </a>
            <a href="#">
              <FaLinkedinIn
                className={`hover:text-[#f5a425] transition-[700ms]`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subhader;
