import React from "react";

const Join = () => {
  return (
    <div className="pt-10">
      <div className="flex grey pr-20 justify-end">
        <p>
          Already have an account? <span className="blue pl-1">Sign In</span>
        </p>
      </div>
      {/* // */}
      <div className="pl-40 mt-20 flex flex-col gap-5">
        <h1 className="text-black text-xl  font-bold">Join Us!</h1>
        <p className="grey max-w-411">
          To begin this journey, tell us what type of account you’d be opening.
        </p>
        <div className="flex gap-5 max-w-426 px-7 py-5 shadow-md hover:bg-gray-100 hover:border border-custom-blue rounded">
          <div className="PolyWrapper pt-2 relative">
            <img src="assets/Images/Polygon1.png" />
            <div className="absolute top-5 left-2.5">
              <img src="assets/Images/user.png" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Individual</p>
            <p>Personal account to manage all your activities.</p>
          </div>
          <div className="pt-6">
            <img src="assets/Images/arrowRight.png" />
          </div>
        </div>
        {/* //// */}
        <div className="flex gap-5 max-w-426 px-7 py-5 shadow-md hover:bg-gray-100 hover:border border-custom-blue rounded">
          <div className="PolyWrapper pt-2 relative">
            <img src="assets/Images/Polygon2.png" />
            <div className="absolute top-6 left-3.5">
              <img src="assets/Images/briefcase.png" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Business</p>
            <p>Own or belong to a company, this is for you..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
