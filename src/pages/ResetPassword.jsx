import { Formik } from "formik";
import Form from "../components/Form";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import TextInput from "../components/TextInput";
import Title from "../components/Title";
import { put } from "../helpers/fetchers/put";
import { resetPasswordValidation } from "../helpers/validationSchemas/resetPasswordValidation";
import PrimaryButton from "../components/PrimaryButton";

const ThankYouMessage = () => (
  <div>
    Thank you for changing your password, please <Link to="/login">Log In</Link> to continue.
  </div>
);

const ErrorMessage = () => (
  <div>
    Something went wrong, please <Link to="/forgot_password">request a new password reset link</Link> to continue.
  </div>
);

function ResetPassword() {
  const { verificationToken } = useParams();
  const [message, setMessage] = useState();

  const handleSubmit = (data) => {
    const sentData = { ...data, reset_password_token: verificationToken };
    put("/password", sentData)
      .then(() => setMessage(<ThankYouMessage />))
      .catch(() => setMessage(<ErrorMessage />));
  };

  return (
    <ModalCard>
      <Title>Reset Your Password</Title>
      {message ? (
        message
      ) : (
        <Formik
          initialValues={{
            password: "",
            password_confirmation: "",
          }}
          validationSchema={resetPasswordValidation}
          onSubmit={handleSubmit}
        >
          <Form>
            <TextInput label="Password" name="password" type="password" />
            <TextInput label="Password Confirmation" name="password_confirmation" type="password" />
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Form>
        </Formik>
      )}
    </ModalCard>
  );
}

export default ResetPassword;
