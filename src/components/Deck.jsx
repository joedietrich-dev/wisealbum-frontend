import styled from "styled-components/macro";

const Deck = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
`;

export default Deck;
