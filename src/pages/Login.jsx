import { Formik } from "formik";
import Form from "../components/Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";
import ErrorMessage from "./ErrorMessage";
import PrimaryButton from "../components/PrimaryButton";

function Login() {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState();

  const handleSubmit = (data) => {
    handleLogin(
      data,
      () => {
        navigate("/dashboard");
      },
      (err) => {
        setSubmitError(err.message);
      }
    );
  };

  return (
    <ModalCard>
      <Title>Login</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form>
      </Formik>
      {submitError ? <ErrorMessage>{submitError}</ErrorMessage> : null}

      <p>
        <Link to="/signup">I don't have an account yet</Link>
      </p>
      <p>
        <Link to="/forgot_password">I forgot my password</Link>
      </p>
    </ModalCard>
  );
}

export default Login;
