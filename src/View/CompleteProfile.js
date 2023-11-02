import React from "react";
import Button from "../components/Button";
import { CmpValidation } from "../Validation/CmpValidation";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: " ",
};

const CompleteProfile = () => {
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: CmpValidation,
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <div className="flex grey justify-end absolute top-5 right-20">
        <p className="pt-10">Bank Verification</p>
      </div> */}
      <div className=" mt-20 px-48 flex flex-col gap-5 pb-6">
        <h1 className="text-black text-2xl xl:text-3xl  font-bold mx-auto pr-16">
          Complete Your Profile!
        </h1>
        <p className="grey max-w-411 mx-auto">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-4 max-w-426 mx-auto">
            <label
              for="name"
              class="block text-base	 font-medium leading-6 grey"
            >
              Bank verification number (BVN)
            </label>
            {/* /// */}
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Add BVN"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
            </div>
            {errors.name && <small>{errors.name}</small>}
            {/* /// */}

            <Button
              classNames={
                "mt-4 max-w-426 min-h-64 bg-red py-4 px-36 w-full rounded text-sm bg-blue-700 text-white"
              }
            >
              Save and Continue
            </Button>
            {/* /// */}
          </div>
          <div className="flex gap-2 mt-4  max-w-426 pl-28 mx-auto">
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

export default CompleteProfile;
