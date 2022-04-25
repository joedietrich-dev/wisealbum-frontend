import styled from "styled-components/macro";

const CardHorizontal = styled.div`
  display: grid;
  grid:
    "image description tags meta buttons" 200px
    / minmax(200px, 1fr) 2fr 1fr auto auto;
  /* grid-template-rows: 200px; */
  background-color: #f3f3f3;

  gap: 24px;
  justify-content: space-between;
  box-shadow: 0.2px 0.2px 0.5px rgba(0, 0, 0, 0.035), 0.6px 0.6px 1.3px rgba(0, 0, 0, 0.05), 1.5px 1.5px 3px rgba(0, 0, 0, 0.065),
    5px 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 920px) {
    padding: 24px;
    grid:
      "image buttons" 200px
      "description description" auto
      "tags meta" auto
      / 1fr auto;
  }
`;

export default CardHorizontal;
