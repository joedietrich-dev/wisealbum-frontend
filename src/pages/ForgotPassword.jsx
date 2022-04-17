import { Formik } from "formik";
import Form from "../components/Form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { post } from "../helpers/fetchers/post";

function ForgotPassword() {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    post("/password", data);
    navigate("/forgot_password/verification_sent");
  };
  return (
    <ModalCard>
      <Title>Forgot Your Password?</Title>

      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <TextInput label="Email Address" name="email" type="email" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link to="/signup">I don't have an account yet</Link>
    </ModalCard>
  );
}

export default ForgotPassword;
