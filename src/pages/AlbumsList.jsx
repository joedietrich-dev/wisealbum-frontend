import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AlbumCard from "../components/AlbumCard";
import Card from "../components/Card";
import Deck from "../components/Deck";
import PageCard from "../components/PageCard";
import PrimaryButton from "../components/PrimaryButton";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import { ROLE } from "../helpers/roles";

function AlbumsList() {
  const { user, loading } = useAuth();
  const { organizationId } = useParams();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // If the user is not a Super Admin or Org Owner who has no Org ID
      if (
        user &&
        (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10)))
      ) {
        authorizedGet(`/organizations/${organizationId}/albums`).then((json) => setAlbums(json));
        console.log("Welcome");
      } else {
        navigate("/dashboard");
      }
    }
  }, [navigate, organizationId, user, loading]);

  const handleEditAlbum = (albumId) => {
    navigate(`/organizations/${organizationId}/albums/${albumId}/edit`);
  };

  return (
    <PageCard>
      <Title>Albums</Title>
      <Subtitle>View and edit your albums.</Subtitle>
      <Deck>
        {albums?.map((album) => (
          <AlbumCard
            key={album.id}
            coverImage={album.cover_image_path}
            description={album.description}
            name={album.name}
            onEditAlbum={handleEditAlbum}
            id={album.id}
          />
        ))}
        <Card>
          <CenteredCardContent>
            <PrimaryButton onClick={() => navigate(`/organizations/${organizationId}/albums/create`)}>+ Add Album</PrimaryButton>
          </CenteredCardContent>
        </Card>
      </Deck>
    </PageCard>
  );
}

const CenteredCardContent = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default AlbumsList;
