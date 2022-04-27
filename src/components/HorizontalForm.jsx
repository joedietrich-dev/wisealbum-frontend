import styled from "styled-components/macro";

const HorizontalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 24px;
  padding-bottom: 36px;

  & > * {
    flex: 1 1 auto;
  }

  @media (max-width: 678px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export default HorizontalForm;
