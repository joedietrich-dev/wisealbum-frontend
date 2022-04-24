import styled from "styled-components/macro";
import PrimaryButton from "./PrimaryButton";

const NavToggle = styled(PrimaryButton)`
  display: none;

  @media (max-width: 920px) {
    display: block;
    align-self: flex-end;
  }
`;

export default NavToggle;
