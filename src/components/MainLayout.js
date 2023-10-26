// SharedLayout.js
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="boilerplate flex">
      <div
        className="w-7/12  blueBoiler bg-cover bg-center bg-no-repeat flex flex-col gap-6 pt-48 px-16 text-white min-h-screen"
        style={{ backgroundImage: "url('/assets/Images/Montreal.jpg')" }}
      >
        <div className="absolute bg-blue-500 left-0 top-0 z-40"></div>
        {/* <div className="blueBoiler  lg:w-7/12 bg-blue-500 bg-url('assets/Images/Montreal.jpg') flex flex-col gap-6 pt-48 px-16 text-white min-h-screen"> */}
        <div className="commasWrapper ">
          <img src="assets/Images/commas.png" />
        </div>
        <p className="text-xl font-inter leading-9">
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </p>
        <div className="flex gap-2">
          <p className="font-inter">Vincent Obi</p>
          <div className="checkWrapper py-1">
            <img src="assets/Images/circlecheck.png" />
          </div>
        </div>
        <div className="flex flex-col items-end px-6">
          <img src="assets/Images/Vector1.png" />
        </div>
      </div>
      <div className="whiteboiler pl-120px w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
