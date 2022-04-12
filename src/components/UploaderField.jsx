import { useField } from "formik";
import React from "react";
import Uploader from "./Uploader";

function UploaderField({ name, placeholderText = "Drag 'n' drop some files here, or click to select files", filePath = "" }) {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;
  const onUpload = (file, url) => {
    setValue(url);
  };
  return (
    <>
      <p>{value}</p>
      <Uploader placeholderText={placeholderText} filePath={filePath} onUpload={onUpload} inputProps={field} />
    </>
  );
}

export default UploaderField;
