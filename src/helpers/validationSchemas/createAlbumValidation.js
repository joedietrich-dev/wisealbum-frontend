import { string, object } from "yup";

const createAlbumValidation = object({
  name: string().required("Required"),
});

export { createAlbumValidation };
