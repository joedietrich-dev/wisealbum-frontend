import { ref, string, object } from "yup";

const resetPasswordValidation = object({
  password: string()
    .required("Password cannot be blank")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must be at least 8 characters long, with numbers and uppercase and lowercase letters"
    ),
  password_confirmation: string()
    .required("Password confirmation cannot be blank")
    .oneOf([ref("password"), null], "Passwords must match"),
});

export { resetPasswordValidation };
