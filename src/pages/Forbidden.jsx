import React from "react";
import PageCard from "../components/PageCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

function Forbidden() {
  return (
    <PageCard>
      <Title>Forbidden</Title>
      <Subtitle>We're sorry, the page you tried to access isn't available. Please try another.</Subtitle>
    </PageCard>
  );
}

export default Forbidden;
