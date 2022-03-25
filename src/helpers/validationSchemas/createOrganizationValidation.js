import { string, object } from "yup";

const createOrganizationValidation = object({
  name: string().required("Required"),
});

export { createOrganizationValidation };
