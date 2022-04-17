import React from "react";
import styled from "styled-components/macro";

const MediaContainer = styled.div`
  width: 100%;
`;
const ImagePreview = ({ media }) => (
  <MediaContainer>
    <img src={media.url} alt={media.description} style={{ height: "auto", maxWidth: "100%" }} />
  </MediaContainer>
);
const VideoPreview = ({ media }) => {
  return (
    <MediaContainer>
      {!!media.url && (
        <video key={media.id} controls style={{ maxWidth: "100%" }}>
          <source src={media.url} type={media.file_type} />
          <p>Please try again</p>
        </video>
      )}
    </MediaContainer>
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
