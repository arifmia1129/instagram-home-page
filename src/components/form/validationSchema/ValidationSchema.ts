import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Phone number, username or email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .required("Password is required"),
});
