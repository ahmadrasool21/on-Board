// SharedLayout.js
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="absolute top-32 left-80 z-20">
        <img src="assets/Images/Group.png" />
      </div>
      <div className="absolute bottom-0 left-0 z-20">
        <img src="assets/Images/Vector.png" />
      </div>
      <div className="boilerplate flex">
        <div
          className="relative w-7/12  blueBoiler bg-cover bg-center bg-no-repeat flex flex-col gap-6  text-white min-h-screen pt-48 px-20"
          style={{ backgroundImage: "url('/assets/Images/Montreal.jpg')" }}
        >
          <div className="absolute bg-blue-500 top-0 left-0 h-full w-full opacity-90"></div>
          {/* <div className="blueBoiler  lg:w-7/12 bg-blue-500 bg-url('assets/Images/Montreal.jpg') flex flex-col gap-6 pt-48 px-16 text-white min-h-screen"> */}

          <div className="flex absolute top-12 gap-3">
            <div>
              <img src="assets/Images/Union.png" />
            </div>
            <p className="pt-2">Oasis</p>
          </div>

          <div className="commasWrapper relative">
            <img src="assets/Images/commas.png" />
          </div>
          <p className=" relative text-xl font-inter leading-9">
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
        <div className="whiteboiler pl-120px w-full">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
