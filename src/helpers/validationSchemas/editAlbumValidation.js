import { string, object } from "yup";

const editAlbumValidation = object({
  name: string().required("Required"),
});

export { editAlbumValidation };
