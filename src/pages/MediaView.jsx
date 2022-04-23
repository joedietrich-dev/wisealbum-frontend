import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MediaPreview from "../components/MediaPreview";
import PageCard from "../components/PageCard";
import Title from "../components/Title";
import { authorizedGet } from "../helpers/fetchers/get";
import PrimaryButton from "../components/PrimaryButton";
import IconFlex from "../components/IconFlex";
import Icon from "../components/Icon";
import tagIcon from "../tag.svg";
import PageText from "../components/PageText";

function MediaView() {
  const { organizationId, albumId, mediaId } = useParams();
  const [media, setMedia] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    authorizedGet(`/media_files/${mediaId}`).then(setMedia);
  }, [mediaId]);

  const handleBackClick = () => {
    navigate(`/organizations/${organizationId}/albums/${albumId}/view`);
  };

  return (
    <PageCard>
      <Title>View Media</Title>
      <PrimaryButton onClick={handleBackClick}>Back</PrimaryButton>
      {media ? (
        <>
          <MediaPreview media={media} />
          <PageText>{media.description}</PageText>
          {media.tags?.length ? (
            <IconFlex>
              <Icon url={tagIcon} />
              <p>{media.tags}</p>
            </IconFlex>
          ) : null}
        </>
      ) : null}
    </PageCard>
  );
}

export default MediaView;
