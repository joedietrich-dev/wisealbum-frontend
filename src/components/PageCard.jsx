import styled from "styled-components/macro";

const PageCard = styled.main`
  max-width: 1440px;
  width: 90%;
  padding: 16px;
  margin: 0 auto;

  @media (max-width: 450px) {
    width: 98%;
  }
`;

export default PageCard;
