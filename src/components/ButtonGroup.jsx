import styled from "styled-components/macro";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};

  & button {
    flex: ${(props) => (props.justify === "stretch" || !props.justify ? "0 1 100%" : "unset")};
  }
`;

export default ButtonGroup;
