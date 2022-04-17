import styled from "styled-components/macro";

const StyledNavigation = styled.nav`
  width: 90%;
  max-width: 1440px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  justify-content: end;
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
`;

export default StyledNavigation;
