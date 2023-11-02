// SharedLayout.js
import React from "react";
import { Link } from "react-router-dom";
const MainLayout = ({ children, header, sign }) => {
  return (
    <>
      <div className="boilerplate flex">
        <div
          className=" relative blueBoiler   bg-cover bg-center bg-no-repeat lg:flex hidden flex-col w-7/12 justify-between gap-6  text-white min-h-screen px-12 pt-16"
          style={{ backgroundImage: "url('/assets/Images/Montreal.jpg')" }}
        >
          <div className="flex relative  z-10 gap-3">
            <div>
              <img src="assets/Images/Union.png" />
            </div>
            <p className="pt-2">Oasis</p>
          </div>

          <div className="absolute bg-blue-500 top-0 left-0 h-full w-0 sm:w-full opacity-90"></div>
          {/* <div className="absolute  bottom-0 left-0 z-20  lg:w-24 md:w-20">
            <img src="assets/Images/Vector.png" />
          </div> */}

          {/* <div className="flex absolute top-10 gap-3">
            <div>
              <img src="assets/Images/Union.png" />
            </div>
            <p className="pt-2">Oasis</p>
          </div> */}
          <div className="flex flex-col gap-10">
            <div className="commasWrapper relative">
              <img src="assets/Images/commas.png" />
            </div>
            <p className=" relative  xl:text-xl font-inter leading-9">
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
            <div className=" relative flex gap-2">
              <p className="font-inter">Vincent Obi</p>
              <div className="checkWrapper py-1">
                <img src="assets/Images/circlecheck.png" />
              </div>
            </div>
            <div className=" relative flex flex-col items-end px-6 ">
              <img src="assets/Images/Vector1.png" />
            </div>
          </div>
          {/* / */}
          <div className=" z-10 pr-64 -ml-12">
            <img src="assets/Images/Vector.png" />
          </div>
          {/*  */}
        </div>
        <div className="whiteboiler flex flex-col w-full px-4 min-h-screen  ">
          <div className="flex grey justify-end pr-10">
            <p className="pt-8 ">
              {header}
              <span className="blue pl-1">
                <Link to="/Register">{sign}</Link>
              </span>
            </p>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
