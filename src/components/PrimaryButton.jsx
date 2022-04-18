import styled from "styled-components/macro";
import Button from "./Button";

const PrimaryButton = styled(Button)`
  background-color: #02182b;
  color: #ffffff;

  &:hover {
    background-color: #04335d;
  }
`;

export default PrimaryButton;
