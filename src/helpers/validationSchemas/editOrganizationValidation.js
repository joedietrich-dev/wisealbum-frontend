import { string, object } from "yup";

const editOrganizationValidation = object({
  name: string().required("Required"),
});

export { editOrganizationValidation };
