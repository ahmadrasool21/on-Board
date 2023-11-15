import React from "react";
import Button from "../components/Button";
import { useFormik } from "formik";
import { ProfileValidation } from "../Validation/ProfileValidation";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialValues = {
  address: " ",
  phone: " ",
};

const Profile = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ProfileValidation,
      onSubmit: (values) => {
        console.log(values);
        navigate("/AddProfile");
      },
    });
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" flex flex-col gap-5 ">
        <h1 className="text-black text-xl sm:text-2xl xl:text-3xl  font-bold ">
          Complete Your Profile!
        </h1>
        <p className="grey max-w-411 mx-auto text-sm sm:text-base">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-4 max-w-426 mx-auto">
            <label
              for="phone"
              class="block text-xs sm:text-base	 font-medium leading-6 grey"
            >
              Phone Number*
            </label>
            {/* /// */}
            {/* <div class="mt-2 relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Phone Number"
                // value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3 sm:py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:text-sm sm:leading-6 mb-2 pl-7"
              />
              {errors.phone && touched.phone && (
                <small className="absolute text-red-500	text-xs">
                  {errors.phone}
                </small>
              )}
            </div> */}
            {/* //// */}
            <div class="mt-2 relative">
              <PhoneInput
                country={"us"}
                // value={this.state.phone}
                placeholder="Enter Phone Number"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                countryCodeEditable={false}
                class="block w-full rounded-md border-0 py-3 sm:py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:text-sm sm:leading-6 mb-2 pl-7"
              />
              {errors.phone && touched.phone && (
                <small className="absolute text-red-500	text-xs">
                  {errors.phone}
                </small>
              )}
            </div>

            {/* /// */}
            <label
              for="email"
              class="block text-xs sm:text-base	 font-medium leading-6 grey mt-9"
            >
              Your address*
            </label>
            <div class="mt-2 relative">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Please enter address"
                // value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3 sm:py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs sm:text-sm sm:leading-6 mb-2 pl-7"
              />
              {errors.address && touched.address && (
                <small className="absolute text-red-500	text-xs">
                  {errors.address}
                </small>
              )}
            </div>

            {/* /// */}
            <label
              for="email"
              class="block text-xs sm:text-base  font-medium  leading-6  grey mt-9"
            >
              Country of Residence
            </label>
            <div class="mt-2">
              <select
                id="country"
                name="country"
                placeholder="please Select"
                class=" block w-full rounded-md border-0 py-3 sm:py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-blue-600 text-xs sm:text-sm sm:leading-6 mb-2 pl-7 "
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United States</option>
              </select>
            </div>
            {/* /// */}

            <Button
              classNames={
                "mt-4 max-w-426 min-h-64 bg-red py-3.5 sm:py-4 mx-auto w-full rounded text-sm bg-blue-700 text-white"
              }
            >
              Save and Continue
            </Button>
          </div>
          <div className="flex gap-2 mt-4  max-w-426 justify-center mx-auto">
            <div className="mt-1">
              <img src="assets/Images/lock_24px.png" />
            </div>
            <p className="grey">Your Info is safely secured</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
