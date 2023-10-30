import * as Yup from "yup";

export const CmpValidation = Yup.object({
  name: Yup.string().min(10).max(10).required("Please Enter Your BVN number"),
});
