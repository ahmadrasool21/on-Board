import React from "react";
import Button from "../components/Button";
import { CmpValidation } from "../components/CmpValidation";
import { useFormik } from "formik";

const initialValues = {
  name: " ",
};

const CompleteProfile = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: CmpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="pt-10">
      <div className="flex grey pr-20 justify-end">
        <p>Bank Verification</p>
      </div>
      <div className=" mt-20 pl-40 flex flex-col gap-5 pb-6">
        <h1 className="text-black text-4xl  font-bold">
          Complete Your Profile!
        </h1>
        <p className="grey max-w-411">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-4 max-w-426">
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
          <div className="flex gap-2 mt-4  max-w-426 pl-28">
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
