import * as yup from "yup";

export const SignUpSchemas = yup.object({
  username: yup.string().min(2).max(30).required("Please enter Username"),
  email: yup.string().email("Invalid email").required("Please enter Email"),
  password: yup.string().min(6).required("Please enter Password"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf(
      [yup.ref("password"), null],
      "Password and Confirm Password do not match"
    ),
});
