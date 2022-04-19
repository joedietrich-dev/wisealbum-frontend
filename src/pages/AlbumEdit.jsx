import { Formik } from "formik";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import PageCard from "../components/PageCard";
import SectionTitle from "../components/SectionTitle";
import Subtitle from "../components/Subtitle";
import TextAreaInput from "../components/TextAreaInput";
import TextInput from "../components/TextInput";
import ToggleField from "../components/ToggleField";
import Title from "../components/Title";
import Uploader from "../components/Uploader";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedDestroy } from "../helpers/fetchers/destroy";
import { authorizedGet } from "../helpers/fetchers/get";
import { authorizedPost } from "../helpers/fetchers/post";
import { ROLE } from "../helpers/roles";
import { editAlbumValidation } from "../helpers/validationSchemas/editAlbumValidation";
import UploaderField from "../components/UploaderField";
import { authorizedPatch } from "../helpers/fetchers/patch";
import FormArea from "../components/FormArea";
import MediaPreview from "../components/MediaPreview";
import DeckHorizontal from "../components/DeckHorizontal";
import DeleteButton from "../components/DeleteButton";
import PrimaryButton from "../components/PrimaryButton";
import ButtonGroup from "../components/ButtonGroup";

function AlbumEdit() {
  const { organizationId, albumId } = useParams();
  const { user, loading } = useAuth();
  const [album, setAlbum] = useState();
  const [media, setMedia] = useState([]);
  const [isAlbumLoading, setIsAlbumLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // If the user is not a Super Admin or Org Owner who has no Org ID
      if (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10))) {
        authorizedGet(`/organizations/${organizationId}/albums/${albumId}`)
          .then((json) => setAlbum(json))
          .then(() => {
            authorizedGet(`/media_files?album_id=${albumId}`).then((json) => setMedia(json));

            setIsAlbumLoading(false);
          });
      } else {
        navigate("/dashboard");
      }
    }
  }, [navigate, organizationId, albumId, user, loading]);

  const handleSubmit = (values) => {
    authorizedPatch(`/organizations/${organizationId}/albums/${albumId}`, values)
      .then(setAlbum)
      .catch((err) => console.error(err));
  };

  // TODO
  const handleDeleteAlbumClick = (f) => f;

  const handleUpload = (file, url) => {
    const fileMetadata = { file_type: file.type, url, album_id: albumId };
    authorizedPost("/media_files", fileMetadata).then((json) => setMedia((media) => [...media, json]));
  };

  const handleEditMediaClick = (id) => {
    navigate(`/organizations/${organizationId}/albums/${albumId}/${id}/edit`);
  };

  const handleDeleteMediaClick = (id) => {
    authorizedDestroy(`/media_files/${id}`)
      .then(() => {
        setMedia((media) => media.filter((m) => m.id !== id));
      })
      .catch(console.error);
  };

  if (media) console.log(media);
  return (
    <PageCard>
      {loading || isAlbumLoading ? null : (
        <>
          <Title>Edit Album - {album.name || ""}</Title>
          <Subtitle>Edit your album here. Add some media!</Subtitle>
          <FormArea>
            <Formik
              initialValues={{
                name: album.name,
                description: album.description,
                is_published: album.is_published || false,
                cover_image_path: album.cover_image_path,
              }}
              onSubmit={handleSubmit}
              validationSchema={editAlbumValidation}
            >
              <Form>
                <ToggleField label="Published" name="is_published" />
                <TextInput label="Album Name" name="name" />
                <TextAreaInput label="Album Description" name="description" />
                <UploaderField filePath={`albums/${albumId}/cover/`} placeholderText="Upload a cover image" name="cover_image_path" />
                <ButtonGroup justify="space-between">
                  <DeleteButton type="button" onDelete={handleDeleteAlbumClick}>
                    Delete Album
                  </DeleteButton>
                  <PrimaryButton type="submit">Save</PrimaryButton>
                </ButtonGroup>
              </Form>
            </Formik>
            <MediaPreview media={{ url: album.cover_image_path, file_type: "image" }} />
          </FormArea>
          <SectionTitle>Media</SectionTitle>
          <Uploader
            placeholderText="Please add media to your album by clicking or dragging files here"
            filePath={`albums/${albumId}/`}
            onUpload={handleUpload}
          />
          {media?.length ? (
            <DeckHorizontal>
              {media.map((mediaFile) => (
                <MediaCard
                  key={mediaFile.id}
                  mediaFile={mediaFile}
                  onEditMediaClick={handleEditMediaClick}
                  onDeleteMediaClick={handleDeleteMediaClick}
                />
              ))}
            </DeckHorizontal>
          ) : null}
        </>
      )}
    </PageCard>
  );
}

export default AlbumEdit;
