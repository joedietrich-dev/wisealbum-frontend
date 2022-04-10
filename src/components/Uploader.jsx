import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { authorizedPost } from "../helpers/fetchers/post";
import UploadArea from "./UploadArea";

async function getSignedUrl(filename) {
  const urlObject = await authorizedPost("/upload", { filename }).then((json) => json);
  if (!urlObject.signedUrl) {
    console.error("Could not sign URL");
  } else {
    return urlObject.signedUrl;
  }
}

async function uploadDirectly(
  file,
  filePath = "",
  onUpload = (file, url) => {
    return;
  }
) {
  const filename = filePath ? `${filePath}${file.name}` : file.name;
  console.log(filePath, filename);
  const signedUrl = await getSignedUrl(filename);
  const res = await fetch(signedUrl, {
    method: "PUT",
    body: file,
  });
  if (res.ok) {
    onUpload(file, `${process.env.REACT_APP_MEDIA_DOMAIN}/${filename}`);
    return res.url;
  }
}

function Uploader({ filePath = "", onUpload = (f) => f }) {
  const onDrop = useCallback(
    (files) => {
      files.forEach((file) => {
        uploadDirectly(file, filePath, onUpload);
      });
    },
    [filePath, onUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <UploadArea {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
    </UploadArea>
  );
}

export default Uploader;
