import React from "react";
import ModalCard from "../components/ModalCard";
import Title from "../components/Title";

function ForgotPasswordSent() {
  return (
    <ModalCard>
      <Title>Reset Sent</Title>
      <div>If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.</div>
    </ModalCard>
  );
}

export default ForgotPasswordSent;
