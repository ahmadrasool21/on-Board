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
      <div className=" flex flex-col gap-5 ">
        <h1 className="text-black text-xl sm:text-2xl xl:text-3xl  font-bold ">
          Complete Your Profile!
        </h1>
        <p className="grey max-w-411 mx-auto text-sm sm:text-base">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-4 max-w-426 mx-auto ">
            <label
              for="name"
              class="block text-sm sm:text-base	 font-medium leading-6 grey"
            >
              Bank verification number (BVN)
            </label>
            {/* /// */}
            <div class="mt-2 relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Add BVN"
                // value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3 sm:py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
              {errors.name && (
                <small className="absolute text-red-500	text-xs">
                  {errors.name}
                </small>
              )}
            </div>
            {/* {errors.name && <small>{errors.name}</small>} */}
            {/* /// */}

            <Button
              classNames={
                "mt-8 max-w-426 min-h-64 bg-red py-4  w-full rounded text-sm bg-blue-700 text-white"
              }
            >
              Save and Continue
            </Button>
            {/* /// */}
          </div>
          <div className="flex gap-2 mt-4  max-w-426 justify-center">
            <div className="mt-1">
              <img src="assets/Images/lock_24px.png" />
            </div>
            <p className="grey text-sm sm:text-base">
              Your Info is safely secured
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
