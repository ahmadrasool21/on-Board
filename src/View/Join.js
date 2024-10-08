import React from "react";

const Join = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* // */}
      <div className="flex flex-col gap-5 m-auto">
        <h1 className="text-black text-xl sm:text-2xl xl:text-3xl  font-bold">
          Join Us!
        </h1>
        <p className="grey max-w-411 mx-auto text-sm sm:text-base">
          To begin this journey, tell us what type of account you’d be opening.
        </p>
        <div className=" border border-transparent flex gap-5 max-w-426 px-7 py-5 shadow-md  hover:bg-gray-100 hover:border-blue-600 rounded mx-auto">
          <div className="PolyWrapper pt-2 relative">
            <img src="assets/Images/Polygon1.png" />
            <div className="hidden sm:block absolute top-5 left-2.5">
              <img src="assets/Images/user.png" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base ">Individual</p>
            <p className="text-sm sm:text-base">
              Personal account to manage all your activities.
            </p>
          </div>
          <div className="pt-6">
            <img src="assets/Images/arrowRight.png" />
          </div>
        </div>
        {/* <br /> */}
        {/* //// */}
        {/* <div className="max-w-426 px-7 py-5 shadow-md transition duration-900 hover:border-transparent hover:border border-custom-blue rounded"> */}
        <div className="mx-auto border border-transparent flex gap-5 max-w-426 px-7 py-5 shadow-md  hover:bg-gray-100 hover:border-blue-600 rounded">
          <div className="PolyWrapper pt-2 relative">
            <img src="assets/Images/Polygon2.png" />
            <div className="hidden sm:block absolute  top-6 left-3.5">
              <img src="assets/Images/briefcase.png" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm sm:text-base">Business</p>
            <p className="text-sm sm:text-base">
              Own or belong to a company, this is for you..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
