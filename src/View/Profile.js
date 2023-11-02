import React from "react";
import Button from "../components/Button";
import { useFormik } from "formik";
import { ProfileValidation } from "../Validation/ProfileValidation";
// import PhoneInput from "../components/PhoneInput";
import { useNavigate } from "react-router-dom";

const initialValues = {
  address: " ",
  phone: " ",
};

const Profile = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ProfileValidation,
    onSubmit: (values) => {
      console.log(values);
      navigate("/AddProfile");
    },
  });
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <div className="flex grey  justify-end absolute top-5 right-20">
        <p className="pt-2">Residency Info</p>
      </div> */}
      <div className=" pl-2 pr-2 flex flex-col gap-5 pb-6">
        <h1 className="text-black text-2xl xl:text-3xl 	font-bold">
          Complete Your Profile!
        </h1>
        <p className="grey max-w-411 mx-auto">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-4 max-w-426 mx-auto">
            <label
              for="phone"
              class="block text-base	 font-medium leading-6 grey"
            >
              Phone Number*
            </label>
            {/* /// */}
            <div class="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter Phone Number"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
            </div>
            {errors.phone && <small>{errors.phone}</small>}
            {/* <PhoneInput /> */}
            {/* /// */}
            <label
              for="email"
              class="block text-base	 font-medium leading-6 grey"
            >
              Your address*
            </label>
            <div class="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Please enter address"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
            </div>
            {errors.address && <small>{errors.address}</small>}
            {/* /// */}
            <label
              for="email"
              class="block text-base  font-medium  leading-6  grey"
            >
              Country of Residence
            </label>
            <div class="mt-2">
              <select
                id="country"
                name="country"
                placeholder="please Select"
                class=" block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-blue-600 sm:text-sm sm:leading-6 mb-2 pl-7 "
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United States</option>
              </select>
            </div>
            {/* /// */}
            {/* <div class="relative flex gap-x-3 mt-4"></div> */}
            {/* /// */}

            <Button
              classNames={
                "mt-4 max-w-426 min-h-64 bg-red py-4 px-36 w-full rounded text-sm bg-blue-700 text-white"
              }
            >
              Save and Continue
            </Button>
            {/* /// */}
            {/* <div class="flex items-center">
              <select class="px-2 py-1 border rounded-l">
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input
                type="text"
                class="px-2 py-1 border-r rounded-r"
                placeholder="Phone Number"
              />
            </div> */}
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
