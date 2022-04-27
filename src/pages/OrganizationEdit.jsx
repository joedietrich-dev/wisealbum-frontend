import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import Title from "../components/Title";
import SectionTitle from "../components/SectionTitle";
import { ROLE, ROLE_IDS } from "../helpers/roles";
import Subtitle from "../components/Subtitle";
import PageCard from "../components/PageCard";
import { Formik } from "formik";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { editOrganizationValidation } from "../helpers/validationSchemas/editOrganizationValidation";
import { authorizedPatch } from "../helpers/fetchers/patch";
import Table from "../components/Table";
import FormArea from "../components/FormArea";
import UploaderField from "../components/UploaderField";
import MediaPreview from "../components/MediaPreview";
import TableHead from "../components/TableHead";
import TableRow from "../components/TableRow";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import TableData from "../components/TableData";
import PrimaryButton from "../components/PrimaryButton";
import { inviteValidation } from "../helpers/validationSchemas/inviteValidation";
import { authorizedPost } from "../helpers/fetchers/post";
import HorizontalForm from "../components/HorizontalForm";
import ErrorMessage from "./ErrorMessage";

function OrganizationEdit() {
  const { organizationId } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [org, setOrg] = useState();
  const [isInviteSending, setIsInviteSending] = useState(false);
  const [inviteError, setInviteError] = useState("");

  useEffect(() => {
    if (!loading) {
      if (ROLE.isSuperAdmin(user) || (ROLE.isOrgOwner(user) && user.organization_id === parseInt(organizationId, 10))) {
        authorizedGet(`/organizations/${organizationId}`)
          .then((json) => {
            setOrg(json);
          })
          .catch((err) => console.error(err));
      } else {
        navigate("/forbidden");
      }
    }
  }, [user, loading, organizationId, navigate]);

  const handleOrganizationEditSubmit = (values) => {
    authorizedPatch(`/organizations/${organizationId}`, values)
      .then((json) => {
        setOrg(json);
      })
      .catch((err) => console.error(err));
  };
  const handleInvitationFormSubmit = (values) => {
    setIsInviteSending(true);
    authorizedPost(`/invitation`, {
      user: {
        ...values,
        organization_id: organizationId,
        role_id: 3,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        if (err.message.includes("Email has already been taken")) {
          setInviteError(err.message);
        } else {
          console.error(err.message);
        }
      })
      .finally(() => setIsInviteSending(false));
  };

  return (
    <PageCard>
      {loading || !org ? null : (
        <>
          <Title>Edit {org.name}</Title>
          <Subtitle>Add your teammates and edit your organization details here.</Subtitle>
          <FormArea>
            <Formik
              initialValues={{
                name: org.name,
                logo_url: org.logo_url,
              }}
              onSubmit={handleOrganizationEditSubmit}
              validationSchema={editOrganizationValidation}
            >
              <Form>
                <TextInput label="Organization Name" name="name" />
                <UploaderField filePath={`organizations/${organizationId}/logo/`} placeholderText="Upload a logo" name="logo_url" />

                <PrimaryButton type="submit">Save</PrimaryButton>
              </Form>
            </Formik>
            <MediaPreview media={{ url: org.logo_url, file_type: "image" }} />
          </FormArea>
          <SectionTitle>Collaborators</SectionTitle>
          <Subtitle>Invite Teammates</Subtitle>
          <Formik
            initialValues={{
              full_name: "",
              email: "",
            }}
            validationSchema={inviteValidation}
            onSubmit={handleInvitationFormSubmit}
          >
            <HorizontalForm>
              <TextInput label="Full Name" name="full_name" />
              <TextInput label="Email Address" name="email" type="email" />
              <PrimaryButton type="submit" disabled={isInviteSending}>
                Invite
              </PrimaryButton>
            </HorizontalForm>
          </Formik>
          {inviteError ? <ErrorMessage>{inviteError}</ErrorMessage> : null}
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Full Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Role</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {org.users.map((user) => (
                <TableRow key={user.id}>
                  <TableData>{user.full_name}</TableData>
                  <TableData>{user.email}</TableData>
                  <TableData>{ROLE_IDS[user.role_id]}</TableData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </PageCard>
  );
}

export default OrganizationEdit;
