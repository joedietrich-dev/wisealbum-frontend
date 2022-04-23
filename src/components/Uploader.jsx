import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { authorizedPost } from "../helpers/fetchers/post";
import FileStatusContainer from "./FileStatusContainer";
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

  try {
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
  } catch {
    handleFileSet((fileStatuses) =>
      fileStatuses.map((fileStatus) => (fileStatus.fileName === file.name ? { ...fileStatus, status: "error" } : fileStatus))
    );
  }
}

function Uploader({
  maxFiles = 0,
  placeholderText = "Drag 'n' drop some files here, or click to select files",
  filePath = "",
  onUpload = (f) => f,
  acceptedTypes = ["image/*", "video/mp4"],
}) {
  const [fileStatuses, setFileStatuses] = useState([]);

  const onDrop = useCallback(
    (files) => {
      files.forEach((file) => {
        uploadDirectly(file, filePath, setFileStatuses, onUpload);
      });
    },
    [filePath, onUpload]
  );

  const { getRootProps, getInputProps, fileRejections, isDragActive } = useDropzone({ onDrop, accept: acceptedTypes, maxFiles, maxSize: 10000000 });
  return (
    <>
      <UploadArea {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>{placeholderText}</p>}
        {fileStatuses.length ? <h4 style={{ marginBottom: "0" }}>Uploads</h4> : null}
        {fileStatuses.map((fileStatus) => (
          <FileStatusContainer key={fileStatus.fileName}>
            <div>{fileStatus.fileName}</div> <div>{fileStatus.status}</div>
          </FileStatusContainer>
        ))}
        {fileRejections
          ? fileRejections.map((rejections) => (
              <FileStatusContainer key={rejections.file.path}>
                <div>{rejections.file.path}</div>{" "}
                <div>
                  {rejections.errors[0].message === "Too many files"
                    ? `Please select only ${maxFiles} file(s)`
                    : rejections.errors[0].message.includes("File is larger")
                    ? "File is too large"
                    : rejections.errors[0].message}
                </div>
              </FileStatusContainer>
            ))
          : null}
      </UploadArea>
    </>
  );
}

export default Uploader;
