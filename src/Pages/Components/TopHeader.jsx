// import React from 'react'

function TopHeader() {
  return (
    <div className="sticky top-0">
        <div className={`w-[80%] m-auto`}>
          <div className={`flex items-center justify-between`}>
            <div>
              <h1 className={`text-28px font-bold`}>
                <a href="#">EDU MEETING</a>
              </h1>
            </div>
            <div>
              <ul className={`flex items-center gap-2 text-13px font-semibold`}>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">MEETING</a>
                </li>
                <li>
                  <a href="#">APPLY NOW</a>
                </li>
                <li>
                  <a href="#">PAGE</a>
                </li>
                <li>
                  <a href="#">COURSES</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default TopHeader;
