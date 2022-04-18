import styled from "styled-components/macro";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
`;

export default ButtonGroup;
