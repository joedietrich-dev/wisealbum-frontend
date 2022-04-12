import { useCallback, useState } from "react";
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
  handleFileSet = (f) => f,
  onUpload = (file, url) => {
    return;
  }
) {
  const filename = filePath ? `${filePath}${file.name}` : file.name;

  handleFileSet((fileStatuses) => [...fileStatuses, { fileName: file.name, status: "uploading" }]);

  const signedUrl = await getSignedUrl(filename);
  const res = await fetch(signedUrl, {
    method: "PUT",
    body: file,
  });
  if (res.ok) {
    handleFileSet((fileStatuses) =>
      fileStatuses.map((fileStatus) => (fileStatus.fileName === file.name ? { ...fileStatus, status: "complete" } : fileStatus))
    );
    onUpload(file, `${process.env.REACT_APP_MEDIA_DOMAIN}/${filename}`);
    return res.url;
  }
  handleFileSet((fileStatuses) =>
    fileStatuses.map((fileStatus) => (fileStatus.fileName === file.name ? { ...fileStatus, status: "error" } : fileStatus))
  );
}

function Uploader({ filePath = "", onUpload = (f) => f }) {
  const [fileStatuses, setFileStatuses] = useState([]);

  const onDrop = useCallback(
    (files) => {
      setFileStatuses((fileStatuses) => fileStatuses.filter((fileStatus) => fileStatus.status === "complete"));
      files.forEach((file) => {
        uploadDirectly(file, filePath, setFileStatuses, onUpload);
      });
    },
    [filePath, onUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <UploadArea {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </UploadArea>
      {fileStatuses.map(
        (fileStatus) =>
          fileStatus.status !== "complete" && (
            <div>
              {fileStatus.fileName}: {fileStatus.status}
            </div>
          )
      )}
    </>
  );
}

export default Uploader;
