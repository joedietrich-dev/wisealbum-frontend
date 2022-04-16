import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import Title from "../components/Title";
import SectionTitle from "../components/SectionTitle";

import { ROLE } from "../helpers/roles";
import Subtitle from "../components/Subtitle";
import PageCard from "../components/PageCard";
import { Form, Formik } from "formik";
import TextInput from "../components/TextInput";
import { editOrganizationValidation } from "../helpers/validationSchemas/editOrganizationValidation";
import Button from "../components/Button";
import { authorizedPatch } from "../helpers/fetchers/patch";
import Table from "../components/Table";
import FormArea from "../components/FormArea";
import UploaderField from "../components/UploaderField";
import MediaPreview from "../components/MediaPreview";

function OrganizationEdit() {
  const { organizationId } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isOrgLoading, setIsOrgLoading] = useState(true);
  const [org, setOrg] = useState();

  useEffect(() => {
    if (!loading) {
      if (ROLE.isSuperAdmin(user) || (ROLE.isOrgOwner(user) && user.organization_id === parseInt(organizationId, 10))) {
        authorizedGet(`/organizations/${organizationId}`)
          .then((json) => {
            setOrg(json);
            setIsOrgLoading(false);
          })
          .catch((err) => console.error(err));
      } else {
        navigate("/forbidden");
      }
    }
  }, [user, loading, organizationId, navigate]);

  const handleSubmit = (values) => {
    authorizedPatch(`/organizations/${organizationId}`, values)
      .then((json) => {
        setOrg(json);
      })
      .catch((err) => console.error(err));
  };

  return (
    <PageCard>
      {loading || isOrgLoading ? null : (
        <>
          <Title>Edit {org.name}</Title>
          <Subtitle>Add your teammates and edit your organization details here.</Subtitle>
          <FormArea>
            <Formik
              initialValues={{
                name: org.name,
                logo_url: org.logo_url,
              }}
              onSubmit={handleSubmit}
              validationSchema={editOrganizationValidation}
            >
              <Form>
                <TextInput label="Organization Name" name="name" />
                <UploaderField filePath={`organizations/${organizationId}/logo/`} placeholderText="Upload a logo" name="logo_url" />

                <Button type="submit">Save</Button>
              </Form>
            </Formik>
            <MediaPreview media={{ url: org.logo_url, file_type: "image" }} />
          </FormArea>
          <SectionTitle>Collaborators</SectionTitle>
          <Subtitle>Invite Teammates</Subtitle>
          <p>TODO: Invitation Form</p>
          <Table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {org.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.full_name}</td>
                  <td>{user.email}</td>
                  <td>{user.role_id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </PageCard>
  );
}

export default OrganizationEdit;
