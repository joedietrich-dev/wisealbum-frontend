import { Formik } from "formik";
import Form from "../components/Form";
import { useEffect } from "react";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedPost } from "../helpers/fetchers/post";
import { createOrganizationValidation } from "../helpers/validationSchemas/createOrganizationValidation";
import { useNavigate } from "react-router-dom";
import { ROLE } from "../helpers/roles";
import FormArea from "../components/FormArea";
import PrimaryButton from "../components/PrimaryButton";

function OrganizationCreate() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not a Super Admin or Org Owner who has no Org ID
    if (!(ROLE.isSuperAdmin(user) || (ROLE.isOrgOwner(user) && !user.organization_id))) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = (values) => {
    authorizedPost(`/organizations`, { organization: { ...values } }).then((json) => {
      setUser({ ...user, organization_id: json.id });
    });
  };

  return (
    <div>
      <Title>Create Organization</Title>
      <Subtitle>Once you've set up your organization, you'll be able to add your teammates! </Subtitle>
      <FormArea>
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={createOrganizationValidation}
        >
          <Form>
            <TextInput label="Organization Name" name="name" />
            <PrimaryButton type="submit">Save and Continue</PrimaryButton>
          </Form>
        </Formik>
      </FormArea>
    </div>
  );
}

export default OrganizationCreate;
