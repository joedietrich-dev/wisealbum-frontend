import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedPost } from "../helpers/fetchers/post";
import { useNavigate, useParams } from "react-router-dom";
import { ROLE } from "../helpers/roles";
import { createAlbumValidation } from "../helpers/validationSchemas/createAlbumValidation";

function AlbumCreate() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { organizationId } = useParams();

  useEffect(() => {
    if (!loading) {
      // If the user is not a Super Admin or Org Owner who has no Org ID
      if (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10))) {
        console.log("Welcome");
      } else {
        navigate("/dashboard");
      }
    }
  }, [user, loading, navigate]);

  const handleSubmit = (values) => {
    authorizedPost(`/organizations/${organizationId}/albums`, { album: { ...values } }).then((json) => {
      console.log(json);
    });
  };

  return (
    <div>
      <Title>Create Album</Title>
      <Subtitle>
        Create a new album! Give it a title, description, and optional cover image. Your album's generated url will display below as well.
      </Subtitle>
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
          <TextInput label="Album Description" name="description" />
          <Button type="submit">Save and Continue</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AlbumCreate;
