import styled from "styled-components/macro";

const CardHorizontal = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 3fr 2fr 1fr 1fr;
  grid-template-rows: 150px;
  height: 150px;
  background-color: #f3f3f3;

  gap: 16px;
  justify-content: space-between;
  box-shadow: 0.2px 0.2px 0.5px rgba(0, 0, 0, 0.035), 0.6px 0.6px 1.3px rgba(0, 0, 0, 0.05), 1.5px 1.5px 3px rgba(0, 0, 0, 0.065),
    5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export default CardHorizontal;
