import { Formik } from "formik";
import Form from "../components/Form";
import { useEffect } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TextAreaInput from "../components/TextAreaInput";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedPost } from "../helpers/fetchers/post";
import { useNavigate, useParams } from "react-router-dom";
import { ROLE } from "../helpers/roles";
import { createAlbumValidation } from "../helpers/validationSchemas/createAlbumValidation";
import PageCard from "../components/PageCard";

function AlbumCreate() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { organizationId } = useParams();
  console.log(loading);

  useEffect(() => {
    if (!loading) {
      if (!user.id) navigate("/login");
      // If the user is not a Super Admin or Org Owner who has no Org ID
      if (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10))) {
        console.log("Welcome");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, loading, navigate, organizationId]);

  const handleSubmit = (values) => {
    authorizedPost(`/organizations/${organizationId}/albums`, { album: { ...values } }).then((json) => {
      navigate(`/organizations/${organizationId}/albums/${json.id}/edit`);
    });
  };

  return (
    <PageCard>
      <Title>Create Album</Title>
      <Subtitle>Create a new album! Give it a title, description, and optional cover image.</Subtitle>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={createAlbumValidation}
      >
        <Form>
          <TextInput label="Album Name" name="name" />
          <TextAreaInput label="Album Description" name="description" />
          <Button type="submit">Save</Button>
        </Form>
      </Formik>
    </PageCard>
  );
}

export default AlbumCreate;
