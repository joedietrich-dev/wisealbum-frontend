import styled from "styled-components/macro";

const Button = styled.button`
  font: inherit;
  line-height: 1;
  padding: 12px;
  background-color: #f3f3f3;
  border: 2px solid #02182b;
  transition: background-color 200ms, color 100ms;

  &:hover {
    background-color: #efefef;
  }
`;

export default Button;
