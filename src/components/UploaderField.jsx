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

  const fileParts = value.split("/");
  const fileName = fileParts[fileParts.length - 1];
  const placeholder = value ? `Drag files or click here to replace ${fileName}` : placeholderText;

  return <Uploader placeholderText={placeholder} filePath={filePath} onUpload={onUpload} inputProps={field} />;
}

export default UploaderField;
