import styled from "styled-components/macro";
import NavHolder from "./NavHolder";

const NavBar = ({ children }) => (
  <NavHolder>
    <StyledNavigation>{children}</StyledNavigation>
  </NavHolder>
);

const StyledNavigation = styled.nav`
  width: 90%;
  max-width: 1440px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.15rem;

    &:visited {
      color: #ffffff;
    }
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
    &:active {
      color: #ffffff;
    }

    &.active {
      font-style: italic;
      text-decoration: underline;
    }
  }
  /* 
  @media (max-width: 920px) {
    flex-direction: column;
  } */
`;

export default NavBar;
