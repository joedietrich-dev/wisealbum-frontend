import styled from "styled-components/macro";

const InputCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  label {
    align-self: flex-start;
    z-index: 1;
    position: relative;
    left: 8px;
    background-color: white;
    padding: 0 8px;
  }

  input {
    position: relative;
    left: 8px;
    outline: 2px solid rgba(2, 24, 43, 1);
    outline-offset: 8px;
  }
`;

export default InputCheckbox;
