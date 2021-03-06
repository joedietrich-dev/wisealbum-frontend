import styled from "styled-components/macro";
const Footer = ({ children }) => (
  <FooterHolder>
    <FooterContent>{children}</FooterContent>
  </FooterHolder>
);
const FooterHolder = styled.div`
  background-color: #02182b;
  color: #ffffff;
  margin-top: 48px;
`;
const FooterContent = styled.footer`
  width: 90%;
  max-width: 1440px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export default Footer;
