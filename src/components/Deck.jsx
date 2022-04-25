import styled from "styled-components/macro";

const Deck = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export default Deck;
