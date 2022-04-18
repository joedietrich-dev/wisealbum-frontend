import React, { useState } from "react";
import styled from "styled-components/macro";
import SecondaryButton from "./SecondaryButton";

function DeleteButton({ onDelete = (f) => f }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      {isClicked ? (
        <Wrapper type="button" onClick={onDelete}>
          Delete, Really
        </Wrapper>
      ) : (
        <Wrapper type="button" onClick={() => setIsClicked(true)}>
          Delete
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled(SecondaryButton)`
  :hover {
    background-color: #d7263d;
    color: #ffffff;
  }
`;

export default DeleteButton;
