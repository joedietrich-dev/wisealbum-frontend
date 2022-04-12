import React from "react";

const ImagePreview = ({ media }) => <img src={media.url} alt={media.description} style={{ height: "auto", maxWidth: "50%" }} />;
const VideoPreview = ({ media }) => {
  return (
    <>
      {!!media.url && (
        <video key={media.id} controls style={{ maxWidth: "100%" }}>
          <source src={media.url} type={media.file_type} />
          <p>Please try again</p>
        </video>
      )}
    </>
  );
};

function MediaPreview({ media }) {
  if (media.file_type.match(/image/)) {
    return <ImagePreview media={media} />;
  } else if (media.file_type.match(/video/)) {
    return <VideoPreview media={media} />;
  }
  return <div>MediaPreview</div>;
}

export default MediaPreview;
