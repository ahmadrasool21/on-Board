// SharedLayout.js
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="boilerplate flex">
        <div
          className="relative w-0 md:w-7/12  blueBoiler bg-cover bg-center bg-no-repeat flex flex-col  justify-center gap-6  text-white min-h-screen px-12"
          style={{ backgroundImage: "url('/assets/Images/Montreal.jpg')" }}
        >
          <div className="absolute bg-blue-500 top-0 left-0 h-full w-0 sm:w-full opacity-90"></div>
          <div className="absolute  bottom-0 left-0 z-20 w-0 lg:w-24 md:w-20">
            <img src="assets/Images/Vector.png" />
          </div>
          {/* <div className="blueBoiler  lg:w-7/12 bg-blue-500 bg-url('assets/Images/Montreal.jpg') flex flex-col gap-6 pt-48 px-16 text-white min-h-screen"> */}
          {/* <div className=" ">
            <img src="assets/Images/Group.png" />
          </div> */}
          <div className="flex absolute top-12 gap-3">
            <div>
              <img src="assets/Images/Union.png" />
            </div>
            <p className="pt-2">Oasis</p>
          </div>
          <div className="commasWrapper relative">
            <img src="assets/Images/commas.png" />
          </div>
          <p className=" relative  xl:text-xl font-inter leading-9">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
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
        <div className="whiteboiler m-auto w-full">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
