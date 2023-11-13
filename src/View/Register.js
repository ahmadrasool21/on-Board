import React from "react";
import Button from "../components/Button";
import { RegisterValidation } from "../Validation/RegisterValidation";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "history";

// import { reg_Validate } from "../components/RegisterValidation";

const initialValues = {
  fname: " ",
  email: " ",
  password: " ",
  offers: " ",
};

const Register = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterValidation,
      onSubmit: (values) => {
        console.log(values);
        navigate("/Profile");
      },
    });
  //   console.log(formik);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-black text-xl sm:text-2xl xl:text-3xl  font-bold">
          Register Individual Account!
        </h1>
        <p className="grey max-w-411 mx-auto text-sm sm:text-base">
          For the purpose of industry regulation, your details are required.
        </p>
        <form onSubmit={handleSubmit}>
          <div class="sm:col-span-0 flex-shrink max-w-426 mx-auto">
            {/* <div class="sm:col-span-4 flex-shrink max-w-426 mx-auto sm:w-full md:w-1/2 lg:w-1/3"> */}
            <label
              for="fname"
              class="block text-xs sm:text-base	 font-medium leading-6 grey"
            >
              Your full Name*
            </label>
            {/* /// */}
            <div class="mt-2">
              <input
                id="fname"
                name="fname"
                type="text"
                placeholder="Invictus Innocent"
                value={values.fname}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
            </div>
            {/* {errors.fname && <small>{errors.fname}</small>} */}
            {errors.fname && touched.fname && <small>{errors.fname}</small>}
            {/* /// */}
            <label
              for="email"
              class="block text-xs sm:text-base	 font-medium leading-6 grey"
            >
              Email address*
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2 pl-7"
              />
            </div>
            {/* {errors.email && <small>{errors.email}</small>} */}
            {errors.email && touched.email && <small>{errors.email}</small>}
            {/* /// */}
            <label
              for="email"
              class="block text-xs sm:text-base	 font-medium leading-6 grey"
            >
              Create Password*
            </label>
            <div class="mt-2">
              <input
                id="passsword"
                name="password"
                type="password"
                placeholder="Enter Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                class="block w-full rounded-md border-0 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-blue-600 sm:text-sm sm:leading-6 mb-2 pl-7 "
              />
            </div>
            {/* {errors.password && <small>{errors.password}</small>} */}
            {errors.password && touched.password && (
              <small>{errors.password}</small>
            )}

            {/* /// */}
            <div class="relative flex gap-x-3 mt-4">
              <div class="flex h-6 items-center">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>

              <div class="text-sm leading-6">
                <label for="offers" class="font-medium grey">
                  I agree to terms & conditions
                </label>
              </div>
            </div>
            {/* /// */}

            <Button
              classNames={
                "mt-4 max-w-426 min-h-64 bg-red py-4 mx-auto w-full rounded text-sm bg-blue-700 text-white"
              }
            >
              Register Account
            </Button>
            {/* </form> */}
            <hr className="mt-4 mb-6" />
            <Button
              classNames={
                "mt-4 max-w-426 min-h-64 bg-red py-4 mx-auto w-full  shadow-lg rounded text-sm  text-black"
              }
            >
              <div className="flex gap-10 justify-center">
                <img src="assets/Images/google.png" />
                <p>Register with Google</p>
              </div>
            </Button>
            {/* /// */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
