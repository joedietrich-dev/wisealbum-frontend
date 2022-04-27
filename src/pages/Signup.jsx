import { Formik } from "formik";
import Form from "../components/Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { post } from "../helpers/fetchers/post";
import { signupValidation } from "../helpers/validationSchemas/signupValidation";
import ErrorMessage from "./ErrorMessage";
import PrimaryButton from "../components/PrimaryButton";

function Signup() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState();
  return (
    <ModalCard>
      <Title>Signup</Title>
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={signupValidation}
        onSubmit={(values) => {
          post(`/signup`, {
            user: {
              ...values,
            },
          })
            .then(() => navigate("/signup/verification_sent"))
            .catch((err) => {
              if (err.message.includes("Email has already been taken")) {
                setSubmitError("Email has been taken, please select another one.");
              } else {
                console.error(err.message);
              }
            });
        }}
      >
        <Form>
          <TextInput label="Full Name" name="full_name" />
          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />
          <TextInput label="Password Confirmation" name="password_confirmation" type="password" />
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form>
      </Formik>
      {submitError ? <ErrorMessage>{submitError}</ErrorMessage> : null}
      <p>
        <Link to="/login">I already have an account</Link>
      </p>
    </ModalCard>
  );
}

export default Signup;
