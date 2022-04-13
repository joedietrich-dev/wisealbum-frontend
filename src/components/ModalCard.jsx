import styled from "styled-components/macro";

const ModalCard = styled.div`
  width: 90%;
  max-width: 480px;
  margin: 16px auto;
  padding: 16px;
  box-shadow: 0.2px 0.2px 0.5px rgba(0, 0, 0, 0.035), 0.6px 0.6px 1.3px rgba(0, 0, 0, 0.05), 1.5px 1.5px 3px rgba(0, 0, 0, 0.065),
    5px 5px 10px rgba(0, 0, 0, 0.1);
  form {
    display: flex;
    flex-direction: column;
  }
`;

export default ModalCard;
