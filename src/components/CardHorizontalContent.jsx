import styled from "styled-components/macro";

const CardHorizontalContent = styled.div`
  padding: 24px 0;
  grid-area: ${(props) => props.gridArea};

  @media (max-width: 920px) {
    padding: 0;

    grid:
      "image meta buttons" 200px
      "description description description" auto
      "tags tags tags" auto
      / minmax(200px, 1fr) 1fr auto;
  }
`;

export default CardHorizontalContent;
