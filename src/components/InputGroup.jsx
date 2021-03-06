import styled from "styled-components/macro";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    align-self: flex-start;
    z-index: 1;
    position: relative;
    left: 8px;
    background-color: white;
    padding: 0 8px;
  }

  input,
  textarea {
    font-family: inherit;
    font: inherit;
    padding: 12px;
    border: 0;
    background-color: #f3f3f3;
    outline: 2px solid rgba(2, 24, 43, 1);
    outline-offset: 8px;
    width: calc(100% - 20px);
    align-self: center;
  }

  input {
    line-height: 1;
  }

  textarea {
    height: calc(1.2rem * 1.55 * 4);
  }

  & .error {
    color: #d7263d;
    position: relative;
    top: 12px;
  }
`;

export default InputGroup;
