import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
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

  const createMedia = (file, url) => {
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
                <TextInput label="Album Name" name="name" />
                <ToggleField label="Published" name="is_published" />
                <TextAreaInput label="Album Description" name="description" />
                <UploaderField filePath={`albums/${albumId}/cover/`} placeholderText="Upload a cover image" name="cover_image_path" />
                <Button type="button" onClick={handleDeleteAlbumClick}>
                  Delete Album
                </Button>
                <Button type="submit">Save</Button>
              </Form>
            </Formik>
            <MediaPreview media={{ url: album.cover_image_path, file_type: "image" }} />
          </FormArea>
          <SectionTitle>Media</SectionTitle>
          <Uploader filePath={`albums/${albumId}/`} onUpload={createMedia} />
          {media?.length ? (
            media.map((mediaFile) => (
              <MediaCard
                key={mediaFile.id}
                mediaFile={mediaFile}
                onEditMediaClick={handleEditMediaClick}
                onDeleteMediaClick={handleDeleteMediaClick}
              />
            ))
          ) : (
            <div>Please Add Media to your Album</div>
          )}
        </>
      )}
    </PageCard>
  );
}

export default AlbumEdit;
