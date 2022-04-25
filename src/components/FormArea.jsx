import styled from "styled-components/macro";

const FormArea = styled.div`
  display: grid;
  grid-template-columns: 2fr minmax(300px, 1fr);
  gap: 16px;

  @media (max-width: 678px) {
    grid-template-columns: 1fr;

    form {
      grid-row: 2;
    }
  }
`;

export default FormArea;
