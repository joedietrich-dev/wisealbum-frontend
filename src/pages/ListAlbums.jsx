import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import Button from "../components/Button";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import Deck from "../components/Deck";
import PageCard from "../components/PageCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";

function ListAlbums() {
  const { user } = useAuth();
  const { organizationId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    authorizedGet(`/organizations/${organizationId}/albums`).then((json) => setAlbums(json));
  }, [organizationId]);

  console.log(albums);

  return (
    // TO DO: Proper gating ofthe features involved
    <PageCard>
      <Title>Albums</Title>
      <Subtitle>View and edit your albums.</Subtitle>
      <Deck>
        {albums?.map((album) => (
          <AlbumCard key={album.id} coverImage={album.cover_image_path} description={album.description} name={album.name} />
        ))}
        <Card>
          <CardTitle>Add Album</CardTitle>
          <Button>Add Album</Button>
        </Card>
      </Deck>
    </PageCard>
  );
}

export default ListAlbums;
