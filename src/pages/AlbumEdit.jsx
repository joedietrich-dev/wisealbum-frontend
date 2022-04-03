import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import Button from "../components/Button";
import MediaCard from "../components/MediaCard";
import PageCard from "../components/PageCard";
import SectionTitle from "../components/SectionTitle";
import Subtitle from "../components/Subtitle";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import { ROLE } from "../helpers/roles";
import { editAlbumValidation } from "../helpers/validationSchemas/editAlbumValidation";

function AlbumEdit() {
  const { organizationId, albumId } = useParams();
  const { user, loading } = useAuth();
  const [album, setAlbum] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // If the user is not a Super Admin or Org Owner who has no Org ID
      if (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10))) {
        authorizedGet(`/organizations/${organizationId}/albums/${albumId}`).then((json) => setAlbum(json));
      } else {
        navigate("/dashboard");
      }
    }
  }, [navigate, organizationId, albumId, user, loading]);

  const handleSubmit = (f) => f;

  return (
    <PageCard>
      {loading || !album ? null : (
        <>
          <Title>Edit Album - {album.name || ""}</Title>
          <Subtitle>Edit your album here. Add some media!</Subtitle>
          <Formik
            initialValues={{
              name: album.name,
              description: album.description,
            }}
            onSubmit={handleSubmit}
            validationSchema={editAlbumValidation}
          >
            <Form>
              <TextInput label="Album Name" name="name" />
              <TextInput label="Album Description" name="description" />
              <Button type="submit">Save</Button>
            </Form>
          </Formik>
          <SectionTitle>Media</SectionTitle>
          <div style={{ width: "100%", padding: "32px", textAlign: "center", boxSizing: "border-box", border: "1px dotted black" }}>
            Media uploader
          </div>
          <MediaCard />
          <Button>Delete</Button>
          <Button>Publish</Button>
          <Button>Delete</Button>
        </>
      )}
    </PageCard>
  );
}

export default AlbumEdit;