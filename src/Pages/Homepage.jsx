import { useState } from "react";
import { Subhader, TopHeader } from "../Navigation";
import './Homepagecss.css'

function Homepage() {
  const [fix, setFix] = useState(false);
  const changeFix = () => {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", changeFix);

  return (
    <div>
      <div>
        <Subhader />
        {/* <div className={`fixed  w-full ${fix ? "bg-white  top-0 text-black":"bg-[#ffffffa9] text-white"}`}> */}
        <div
          className={`fixed w-full ${
            fix
              ? "bg-white ease-in-out   top-0 text-black"
              : "bg-[#ffffffa9] text-white"
          }`}
        >
          <TopHeader />
        </div>
      </div>
      <div className={`w-full`}>
        
      {/* background video */}
      </div>
    </div>
  );
}

export default Homepage;
