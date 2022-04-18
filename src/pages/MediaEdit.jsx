import { Formik } from "formik";
import Form from "../components/Form";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import FormArea from "../components/FormArea";
import MediaPreview from "../components/MediaPreview";
import PageCard from "../components/PageCard";
import Subtitle from "../components/Subtitle";
import TextAreaInput from "../components/TextAreaInput";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import ToggleField from "../components/ToggleField";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedDestroy } from "../helpers/fetchers/destroy";
import { authorizedGet } from "../helpers/fetchers/get";
import { authorizedPatch } from "../helpers/fetchers/patch";
import { ROLE } from "../helpers/roles";
import ButtonGroup from "../components/ButtonGroup";
import PrimaryButton from "../components/PrimaryButton";

function MediaEdit() {
  const { organizationId, mediaId } = useParams();
  const { user, loading } = useAuth();
  const [media, setMedia] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (ROLE.isSuperAdmin(user) || ((ROLE.isOrgOwner(user) || ROLE.isContributor(user)) && user.organization_id === parseInt(organizationId, 10))) {
        authorizedGet(`/media_files/${mediaId}`).then(setMedia);
      } else {
        navigate("/dashboard");
      }
    }
  }, [loading, mediaId, organizationId, user, navigate]);

  const handleSubmit = (values) => {
    authorizedPatch(`/media_files/${mediaId}`, values)
      .then((json) => {
        setMedia(json);
        navigate(-1);
      })
      .catch(console.error);
  };
  const handleDelete = () => {
    authorizedDestroy(`/media_files/${mediaId}`)
      .then(() => navigate(-1))
      .catch(console.error);
  };

  return (
    <PageCard>
      {loading || !media ? null : (
        <>
          <Title>Edit Media - {mediaId}</Title>
          <Subtitle>Give your media a description and some tags. They'll help you and your visitors find your content later.</Subtitle>
          <FormArea>
            <Formik
              initialValues={{
                description: media.description || "",
                tags: "",
                is_published: media.is_published,
                order: media.order || 0,
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <ToggleField label="Published" name="is_published" />
                <TextAreaInput label="Media Description" name="description" />
                <TextInput label="Tags" name="tags" />
                <TextInput label="Order" name="order" type="number" />
                <ButtonGroup justify="space-between">
                  <DeleteButton onDelete={handleDelete}>Delete</DeleteButton>
                  <PrimaryButton type="submit">Save</PrimaryButton>
                </ButtonGroup>
              </Form>
            </Formik>
            <MediaPreview media={media} />
          </FormArea>
        </>
      )}
    </PageCard>
  );
}

export default MediaEdit;
