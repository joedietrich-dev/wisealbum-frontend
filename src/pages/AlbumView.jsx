import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageCard from "../components/PageCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { authorizedGet } from "../helpers/fetchers/get";
import Deck from "../components/Deck";
import MediaViewCard from "../components/MediaViewCard";

function AlbumView() {
  const { organizationId, albumId } = useParams();
  const [album, setAlbum] = useState();
  const [media, setMedia] = useState([]);
  const [isAlbumLoading, setIsAlbumLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    authorizedGet(`/organizations/${organizationId}/albums/${albumId}`)
      .then((json) => setAlbum(json))
      .then(() => {
        authorizedGet(`/media_files?album_id=${albumId}`).then((json) => setMedia(json));

        setIsAlbumLoading(false);
      });
  }, [organizationId, albumId]);

  const handleViewMediaClick = (id) => {
    navigate(`/organizations/${organizationId}/albums/${albumId}/${id}/view`);
  };

  return (
    <PageCard>
      {isAlbumLoading ? null : (
        <>
          <Title>{album.name || ""}</Title>
          <Subtitle>{album.description || ""}</Subtitle>
          {media?.length ? (
            <Deck>
              {media.map((mediaFile) => (
                <MediaViewCard mediaFile={mediaFile} key={mediaFile.id} onViewMediaClick={handleViewMediaClick} />
              ))}
            </Deck>
          ) : null}
        </>
      )}
    </PageCard>
  );
}

export default AlbumView;
