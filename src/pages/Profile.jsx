import PageCard from "../components/PageCard";
import Title from "../components/Title";
import SectionTitle from "../components/SectionTitle";
import Subtitle from "../components/Subtitle";
import { useAuth } from "../helpers/AuthorizationProvider";
import { post } from "../helpers/fetchers/post";
import { useState } from "react";
import { Formik } from "formik";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";

function Profile() {
  const { user, loading } = useAuth();
  const [isResetSent, setIsResetSent] = useState(false);
  const handleSubmit = (data) => {
    console.log(data, user);
    post("/password", data);
    setIsResetSent(true);
  };
  return (
    <>
      {loading ? (
        <PageCard>Loading...</PageCard>
      ) : (
        <PageCard>
          <Title>{user.full_name} || Profile</Title>
          <Subtitle>You are a member of the organization with id {user.organization_id}!</Subtitle>
          <SectionTitle>Password Reset</SectionTitle>
          {isResetSent ? (
            <div>Instructions have been sent to your address.</div>
          ) : (
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <Subtitle>Enter your email address to reset your password</Subtitle>
                <TextInput label="Email Address" name="email" type="email" />
                <PrimaryButton type="submit">Submit</PrimaryButton>
              </Form>
            </Formik>
          )}
        </PageCard>
      )}
    </>
  );
}

export default Profile;
