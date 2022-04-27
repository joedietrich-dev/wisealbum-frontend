import { string, object } from "yup";

const inviteValidation = object({
  full_name: string().required("Required"),
  email: string().email("Invalid email address").required(),
});

export { inviteValidation };
