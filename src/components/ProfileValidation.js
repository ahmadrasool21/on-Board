import * as Yup from "yup";

export const ProfileValidation = Yup.object({
  phone: Yup.string().min(4).required("Please Enter Phone number"),
  address: Yup.string().min(10).required("PLease Enter Home Address"),
});
