import styled from "styled-components/macro";

const Deck = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
`;

export default Deck;
