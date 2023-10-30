import * as Yup from "yup";

export const RegisterValidation = Yup.object({
  fname: Yup.string().min(4).required("Please Enter Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("PLease Enter Email"),
  password: Yup.string().min(4).required("Please Enter Name"),
});
