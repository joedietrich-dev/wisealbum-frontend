import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import Deck from "../components/Deck";
import PageCard from "../components/PageCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { get } from "../helpers/fetchers/get";

function AlbumsListView() {
  const { organizationId } = useParams();
  const [organization, setOrganization] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/organizations/${organizationId}`).then((json) => {
      setOrganization(json);
      // console.log(json);
    });
  }, [organizationId]);

  const handleViewAlbum = (albumId) => {
    navigate(`/organizations/${organizationId}/albums/${albumId}/view`);
  };

  return (
    <PageCard>
      <Title>{organization?.name} Albums</Title>
      <Subtitle>Take a look at {organization?.name}'s albums.</Subtitle>
      <Deck>
        {organization?.albums?.map((album) => (
          <AlbumCard
            key={album.id}
            coverImage={album.cover_image_path}
            description={album.description}
            name={album.name}
            id={album.id}
            onViewAlbum={handleViewAlbum}
          />
        ))}
      </Deck>
    </PageCard>
  );
}

export default AlbumsListView;
